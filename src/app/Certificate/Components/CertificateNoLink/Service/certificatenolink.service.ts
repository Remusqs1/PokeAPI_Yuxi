import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { DocumentTypesGc, GetDocumentTypesOut } from '../MethodParameters/GetDocumentTypeGc';
import { GetFileNoLinkOut } from '../MethodParameters/GetFileNoLinkOut';
import { GetListOptionsOut } from '../MethodParameters/GetListOptionsOut';
import { GetvalidationDataClientOut } from '../MethodParameters/GetvalidationDataClientOut';

@Injectable({
  providedIn: 'root'
})
export class CertificatenolinkService {

  constructor(private proxy: Proxy) { }

  getDocumentTypesGc() {
    return this.proxy.executeGet('savingsAccount/getDocumentTypesGc').pipe(map((response) => {
      return this.mapGetDocumentTypesGc(response);
    }))
  }

  mapGetDocumentTypesGc(input: any) {
    return <GetDocumentTypesOut>input;
  }

  getUserProductsGc() {
    return this.proxy.executeGet('GeneralProducts/GetListOptions').pipe(map((response) => {
      return this.mapGetUserProductsGc(response);
    }))
  }

  private mapGetUserProductsGc(input: any) {
    return <GetListOptionsOut>input;
  }


  GetFileNoLink(input) {
    return this.proxy.executePost('GeneralProducts/GetFileNoLink', input).pipe(map((response) => {
      return this.mapGetFileNoLink(response);
    }))
  }

  private mapGetFileNoLink(input: any) {
    return <GetFileNoLinkOut>input;
  }

  GetvalidationDataClient(input) {
    return this.proxy.executePost('GeneralProducts/GetvalidationDataClient', input).pipe(map((response) => {
      return this.mapGetvalidationDataClient(response);
    }))
  }

  private mapGetvalidationDataClient(input: any) {
    return <GetvalidationDataClientOut>input;
  }

}
