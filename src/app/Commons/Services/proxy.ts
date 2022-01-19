
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Dictionary } from '../Classes/dictionary';
import * as clone from 'clone';
import { SerializationUtils} from '../Classes/serializationUtils';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { BaseOut } from '../Classes/baseOut';
import { Result } from '../Classes/result';
import { Router } from '@angular/router';

export enum RequestMethod {
  Get = 'GET',
  Post = 'POST',
  Put = 'PUT',
  Delete = 'DELETE',
  Options = 'OPTIONS',
  Head = 'HEAD',
  Patch = 'PATCH',
}

export class OptionsRequest {
  headers?: HttpHeaders | { [header: string]: string | string[]; };
  observe?: 'body';
  params?: HttpParams | { [param: string]: string | string[]; };
  reportProgress?: boolean;
  responseType: 'arraybuffer';
  withCredentials?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class Proxy {

  protected _reqId = 'reqId';
  public _http: HttpClient;

  constructor(http: HttpClient, private routes: Router) {
    this._http = http;
  }


  executePost(relativeUrl: string, data: any, withCredentials: boolean = false, urlParameters?:
    Dictionary<string, string>): Observable<any> {
    const dataInput: any = clone(data);
    const request = this.createRequest(relativeUrl, RequestMethod.Post, urlParameters, dataInput, withCredentials);
    request.headers.append('Content-Type', 'application/json');
    request.headers.append('Access-Control-Allow-Origin', '*')
    const observable = this._http.request(request).pipe(
      filter(resp => resp.type !== 0),
      map((resp: any) => this.mapResponse(request.url, relativeUrl, resp)))
    return observable.pipe(filter(resp => resp !== undefined));
  }

  protected mapResponse(url: string, relativeUrl: string, response: Response) {
    let result: any = null;
    if (response.status > 199 && response.status < 299) {// response.ok is not available yet
      if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
        result = response.body;
        result = SerializationUtils.deserializeObjects(result);
        if((result as BaseOut).result === Result.InvalidSession 
        // ||
        // (result as BaseOut).result === Result.InvalidSessionPortal ||
        // (result as BaseOut).result === Result.SessionExpiration 
        ){
          this.routes.navigate(['']);
        }
      }
      if (response.headers.get('Content-Type').indexOf('application/octet-stream') > -1) {
        result = response;
      }
      return result;
    }
  }

  protected createRequest(relativeUrl: string, method: string, urlParameters: Dictionary<string, any>, body: any,
    withCredentials: boolean): HttpRequest<any> {
    let url = '';
    url = environment.pokeApiURl + relativeUrl;
    let search = '';
    if (urlParameters && urlParameters.get('input')) {
      // clone input to avoid components updates
      let input: any;
      input = clone(urlParameters.get('input'));
      search = SerializationUtils.queryStringSerializer(input);
      if (urlParameters.get(this._reqId)) {
        search += '&' + this._reqId + '=' + urlParameters.get(this._reqId);
      }
    } else if (urlParameters && urlParameters.get(this._reqId)) {
      search = this._reqId + '=' + urlParameters.get(this._reqId);
    }
    const params = new HttpParams({ fromString: search });
 
    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
    });
    
    const result = new HttpRequest<any>(
      method,
      url,
      body,
      {
        responseType: 'json',
        params: params,
        headers: headers,
        withCredentials: withCredentials,
      }
    );
    //this.addRequiredHeadersToRequest(result);
    return result;
  }

  protected addRequiredHeadersToRequest(request: HttpRequest<any>) {

    // Append authentication token to request headers if it is exists
    const authenticationToken: string = this.getAuthenticationToken();

    if (authenticationToken) {
      request.headers.append('X-Auth-Token', authenticationToken);
    }

    // Append channel header
    request.headers.append('X-Channel', 'MO');
  }

  protected getAuthenticationToken(): string {
    // TODO revisar
    // return this._contextInfo.authenticationToken;
    return '';
  }

}
