import { Injectable } from '@angular/core';
import { Proxy } from './proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetCatalogsIn } from '../MethodParameters/getCatalogsIn';
import { GetCatalogsOut } from '../MethodParameters/getCatalogsOut';

@Injectable()
export class CommonService {
  constructor(private proxy: Proxy) { }

  getCatalogs(input: GetCatalogsIn): Observable<GetCatalogsOut> {
    const response = this.proxy.executePost('/GetCatalogs', input, null).pipe(map((resp) => this.mapGetCatalogsDataResponse(resp)));
    return response;
  }

  mapGetCatalogsDataResponse(info: any): GetCatalogsOut {
    const result = <GetCatalogsOut>info;
    return result;
  }

}
