import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { DocumentTypesGc, GetDocumentTypesOut } from '../MethodParameters/GetDocumentTypeGc';
import { GetFilePaymentOut } from '../MethodParameters/GetFilePaymentOut';
import { GetUserProductsOut } from '../MethodParameters/GetUserProductsOut';

@Injectable({
  providedIn: 'root'
})
export class AbonoacapitalService {

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
    return this.proxy.executePost('consumeCredit/GetNumberCredit', input).pipe(map((response) => {
      return this.mapGetUserProductsGc(response);
    }))

  }

  private mapGetUserProductsGc(input: any) {
    return <GetUserProductsOut>input;
  }


  getFilePayment(input) {
    return this.proxy.executePost('consumeCredit/GetFilePayment', input).pipe(map((response) => {
      return this.mapGetFileCreditConsumer(response);
    }))

  }

  private mapGetFileCreditConsumer(input: any) {
    return <GetFilePaymentOut >input;
  }


}
