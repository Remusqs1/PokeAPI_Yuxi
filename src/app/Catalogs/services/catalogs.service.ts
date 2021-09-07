import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetCatalogsIn } from '../../Commons/MethodParameters/getCatalogsIn';
import { GetCatalogsOut } from '../MethoParameters/getCatalogsOut';
import { Proxy } from '../../Commons/Services/proxy';
import { CrudCatalogsIn } from '../MethoParameters/crudcatalogsIn';
import { GetTableFields } from '../MethoParameters/getTableNameIn';

@Injectable({
    providedIn: 'root'
  })
  export class CatalogsService {
    constructor(private proxy: Proxy) {

    }
    getCatalogs(controller: string, input: any): Observable<any> {
        return this.proxy.executePost(controller, input).pipe(map((response) => {
            return this.mapCatalogs(response);
        }));
      }
      mapCatalogs(input: any) {
        return <any>input;
      }
      getTableFields(controller: string, input: GetTableFields): Observable<any> {
        return this.proxy.executePost(controller, input).pipe(map((response) => {
            return this.mapCatalogs(response);
        }));
      }
      mapTableFields(input: any) {
        return <any>input;
      }
  }