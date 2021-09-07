import { Injectable } from '@angular/core';
import { Proxy } from './proxy';
import { Observable } from 'rxjs';
import { GetDocumentTypesIn } from '../MethodParameters/getDocumentTypesIn';
import { GetDocumentTypesOut } from '../MethodParameters/getDocumentTypesOut';
import { map } from 'rxjs/operators';
import { GetDepartmentsIn } from '../MethodParameters/getDepartmentsIn';
import { GetDepartmentsOut } from '../MethodParameters/getDepartmentsOut';
import { GetCitiesIn } from '../MethodParameters/getCitiesIn';
import { GetCitiesOut } from '../MethodParameters/getCitiesOut';
import { GetCatalogsIn } from '../MethodParameters/getCatalogsIn';
import { GetCatalogsOut } from '../MethodParameters/getCatalogsOut';
import { GetActivityCIIUIn } from '../MethodParameters/getActivityCIIUIn';
import { GetActivityCIIUOut } from '../MethodParameters/getActivityCIIUOut';

@Injectable()
export class CommonService {
  constructor(private proxy: Proxy) { }

  getDocumentTypes(input: GetDocumentTypesIn): Observable<GetDocumentTypesOut> {
    const response = this.proxy.executePost('Commons/GetDocumentTypes', input).pipe(
      map((resp) => this.mapGetDocumentTypesDataResponse(resp)));
    return response;
  }

  mapGetDocumentTypesDataResponse(info: any): GetDocumentTypesOut {
    const result = <GetDocumentTypesOut>info;
    return result;
  }

  getDepartments(input: GetDepartmentsIn): Observable<GetDepartmentsOut> {
    const response = this.proxy.executePost('Commons/GetDepartments', input).pipe(map((resp) => this.mapGetDepartmentsDataResponse(resp)));
    return response;
  }

  mapGetDepartmentsDataResponse(info: any): GetDepartmentsOut {
    const result = <GetDepartmentsOut>info;
    return result;
  }

  getCities(input: GetCitiesIn): Observable<GetCitiesOut> {
    const response = this.proxy.executePost('Commons/GetCities', input).pipe(map((resp) => this.mapGetCitiesDataResponse(resp)));
    return response;
  }

  mapGetCitiesDataResponse(info: any): GetCitiesOut {
    const result = <GetCitiesOut>info;
    return result;
  }

  getCatalogs(input: GetCatalogsIn): Observable<GetCatalogsOut> {
    const response = this.proxy.executePost('Commons/GetCatalogs', input, null).pipe(map((resp) => this.mapGetCatalogsDataResponse(resp)));
    return response;
  }

  mapGetCatalogsDataResponse(info: any): GetCatalogsOut {
    const result = <GetCatalogsOut>info;
    return result;
  }

  getActivityCIIU(input: GetActivityCIIUIn): Observable<GetActivityCIIUOut> {
    const response = this.proxy.executePost('Commons/GetActivityCIIU', input, null).pipe(
      map((resp) => this.mapGetActivityCIIUDataResponse(resp)));
    return response;
  }

  mapGetActivityCIIUDataResponse(info: any): GetActivityCIIUOut {
    const result = <GetActivityCIIUOut>info;
    return result;
  }
}
