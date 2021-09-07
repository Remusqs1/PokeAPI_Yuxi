import { Injectable } from '@angular/core';
import { Proxy } from '../../Commons/Services/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAdvisersOut } from '../Components/Adviser/Components/MethodParameters/GetAdvisersOut';
import { GetRequestFiltersIn } from '../Components/Adviser/Components/MethodParameters/GetRequestFiltersIn';
import { GetRequestFiltersOut } from '../Components/Adviser/Components/MethodParameters/GetRequestFiltersOut';
import { ReassignRequestIn } from '../Components/Adviser/Components/MethodParameters/ReassignRquestIn';
import { ReassingRequestOut } from '../Components/Adviser/Components/MethodParameters/ReassignRequestOut';
import { GetCasesByDocumentIn } from '../Components/Adviser/Components/MethodParameters/GetCasesByDocumentIn';






@Injectable()
export class CasesService {

  constructor(private proxy: Proxy) { }


  getAdvisers() {
    return this.proxy.executeGet('catalogsBizagi/getAdvisers')
      .pipe(map((response: any) => {
        return this.mapResponseGetAdvisers(response);
      }));
  };

  mapResponseGetAdvisers(response: any): GetAdvisersOut {
    return <GetAdvisersOut>response;
  }

  getRequestFilters(getRequestFiltersIn: GetRequestFiltersIn) {
    return this.proxy.executePost('prospectFamily/GetRequestsFilters', getRequestFiltersIn, null)
      .pipe(map((response) => {
        return this.mapResponseGetRequestsFiltersOut(response);
      }));
  }

  mapResponseGetRequestsFiltersOut(response: any) {
    return <GetRequestFiltersOut>response;
  }

  ReassingRequest(reassignRequest: ReassignRequestIn) {
    console.log(reassignRequest);

    return this.proxy.executePost('prospectFamily/ReassignRequest', reassignRequest, null)
      .pipe(map((response) => {
        return this.mapResponseReassignRequest(response);
      }));
  }

  mapResponseReassignRequest(response: any) {
    return <ReassingRequestOut>response;
  }


  GetCasesByDocument(getCaseByDocumentIn: GetCasesByDocumentIn) {
    // return this.proxy.executePost('prospectFamily/GetCasesByDocument', getCaseByDocumentIn, null)

    // .subscribe((response)=>{
    //   console.log(response);
    // })
    return null;
  }

}



