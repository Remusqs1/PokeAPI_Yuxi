import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Dictionary } from '../Classes/dictionary';
import { BaseIn } from '../Classes/baseIn';
import * as clone from 'clone';
import { SerializationUtils } from '../Classes/serializationUtils';
import { Subject, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Result } from '../Classes/result';

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

  constructor(http: HttpClient, private router: Router) {
    this._http = http;
  }

  executePost(relativeUrl: string, data: any, withCredentials: boolean = false, urlParameters?:
    Dictionary<string, string>): Subject<any> {
    // clone data to avoid components updates
    let dataInput: any;
    dataInput = clone(data);
    (<BaseIn>dataInput).currentSesId = localStorage.getItem('sesId_adm');
    (<BaseIn>dataInput).currentUser = JSON.parse(localStorage.getItem('user_adm'));
    if (JSON.parse(localStorage.getItem('user_adm')) != null) {
      (<BaseIn>dataInput).company = JSON.parse(localStorage.getItem('user_adm')).usr_companyID;
    }
    const body: any = SerializationUtils.jsonStringSerializer(dataInput);
    const request = this.createRequest(relativeUrl, RequestMethod.Post, urlParameters, dataInput, withCredentials);
    request.headers.append('Content-Type', 'application/json');
    request.headers.append('Access-Control-Allow-Origin', '*')
    const observable = this._http.request(request).map(this.mapResponse.bind(this, request.url, relativeUrl));
    let subject: Subject<any>;
    subject = new Subject();
    observable.subscribe(

      {


        next: (result) => {
          // console.log("Resultado", JSON.parse(<string>result));
          // console.log("Resultado", JSON.parse(<string>result));
          subject.next(result);
        },
        error: (err) => subject.error(err),
        complete: () => subject.complete()
      }
    );
    subject.subscribe((r) => {
      if (r.result == Result.InvalidSession) {
        this.invalidSession();
      }

    });
    return subject;
  }

  handleError(errorResponse: HttpErrorResponse) {
    // return an observable with a meaningful error message to the end user
    return throwError(errorResponse);
  }

  // console.error(err)

  executeGet(relativeUrl: string): Subject<any> {
    const request = this.createRequestGet(relativeUrl, RequestMethod.Get, null);
    request.headers.append('Content-Type', 'application/json');
    request.headers.append('Access-Control-Allow-Origin', '*')
    const observable = this._http.request(request).map(this.mapResponse.bind(this, request.url, relativeUrl));
    let subject: Subject<any>;
    subject = new Subject();
    observable.subscribe(
      {
        next: (result) => { subject.next(result); },
        error: (err) => console.error(err),
        complete: () => subject.complete()
      }
    );
    return subject;
  }

  protected mapResponse(url: string, relativeUrl: string, response: Response) {
    let result: any = null;
    if (response.status > 199 && response.status < 299) {
      if (response.headers.get('Content-Type').indexOf('application/json') > -1) {
        result = response.body;
        result = SerializationUtils.deserializeObjects(result);
      }
      if (response.headers.get('Content-Type').indexOf('application/octet-stream') > -1) {
        result = response;
      }
      return result;
    }
  }

  protected createRequest(relativeUrl: string, method: string, urlParameters: Dictionary<string, any>,
    body: any, withCredentials: boolean): HttpRequest<any> {
    let url = '';
    url = environment.webApiBaseUrl + relativeUrl;
    let search = '';
    if (urlParameters && urlParameters.get('input')) {
      let input: any;
      input = clone(urlParameters.get('input'));
      search = SerializationUtils.queryStringSerializer(input);
      if (urlParameters.get(this._reqId)) {
        search += '&' + this._reqId + '=' + urlParameters.get(this._reqId);
      }
    } else if (urlParameters && urlParameters.get(this._reqId)) {
      search = this._reqId + '=' + urlParameters.get(this._reqId);
    }

    const headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*'
    });
    const params = new HttpParams({ fromString: search });
    const result = new HttpRequest<any>(
      method,
      url,
      body,
      {
        responseType: 'json',
        params: params,
        headers: headers,
        withCredentials: withCredentials
      }
    );
    this.addRequiredHeadersToRequest(result);
    return result;
  }

  protected createRequestGet(relativeUrl: string, method: string, body: any): HttpRequest<any> {
    let url = '';
    url = environment.webApiBaseUrl;//+ relativeUrl;

    const headers = new HttpHeaders({
      'currentSesId': localStorage.getItem('sesId_adm').toString(),
      'currentUser': localStorage.getItem('user_adm').toString(),
      'Access-Control-Allow-Origin': '*',
      'urlGetRequest': relativeUrl
    });

    const result = new HttpRequest<any>(
      method,
      url,
      body,
      {
        responseType: 'json',
        headers: headers,
        params: null,
        withCredentials: false
      }
    );
    // this.addRequiredHeadersToRequest(result);
    return result;
  }

  protected addRequiredHeadersToRequest(request: HttpRequest<any>) {

    // // Append authentication token to request headers if it is exists
    // const authenticationToken: string = this.getAuthenticationToken();

    // if (authenticationToken) {
    //   request.headers.append('X-Auth-Token', authenticationToken);
    // }

    // // Append channel header
    // request.headers.append('X-Channel', 'MO');
  }

  protected getAuthenticationToken(): string {
    // TODO revisar
    // return this._contextInfo.authenticationToken;
    return '';
  }

  invalidSession() {

    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
  }

}
