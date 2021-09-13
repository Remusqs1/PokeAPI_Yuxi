import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Proxy } from '../../Commons/Services/proxy';
import { CreateIndicativesIn } from '../MethodParameters/createIndicativesIn';
import { CreateIndicativesOut } from '../MethodParameters/createIndicativesOut';

@Injectable()
export class ManagementService {

  constructor(private proxy: Proxy) { }
  
  createIndicative(input: CreateIndicativesIn): Observable<CreateIndicativesOut> {
    const response = this.proxy.executePost('/CreateIndicatives', input, true, null).pipe(
      map((res) => this.mapCreateIndicativeDataResponse(res)));
    return response;
  }

  mapCreateIndicativeDataResponse(info: any): CreateIndicativesOut {
    const result = info as CreateIndicativesOut;
    return result;
  }
  
}
