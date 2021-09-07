import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { DocumentTypesGc, GetDocumentTypesOut } from '../MethodParameters/GetDocumentTypeGc';
import { GetFilePeaceSafeOut } from '../MethodParameters/GetFilePeaceSafeOut';
import { GetUserProductsOut } from '../MethodParameters/GetUserProductsOut';

@Injectable({
  providedIn: 'root'
})
export class PazysalvoService {

  constructor(private proxy: Proxy) { }

  getDocumentTypesGc() {
    return this.proxy.executeGet('savingsAccount/getDocumentTypesGc').pipe(map((response) => {
      return this.mapGetDocumentTypesGc(response);
    }))
  }

  mapGetDocumentTypesGc(input: any) {
    return <GetDocumentTypesOut>input;
  }

  getUserProductsGc(input) {
    return this.proxy.executePost('consumeCredit/GetNumberCreditCancelled', input).pipe(map((response) => {
      return this.mapGetUserProductsGc(response);
    }))

  }

  private mapGetUserProductsGc(input: any) {
    return <GetUserProductsOut>input;
  }


  GetFilePeaceSafe(input) {
    return this.proxy.executePost('consumeCredit/GetFilePeaceSafe', input).pipe(map((response) => {
      return this.mapGetFilePeaceSafe(response);
    }))

  }

  private mapGetFilePeaceSafe(input: any) {
    return <GetFilePeaceSafeOut>input;
  }


}
