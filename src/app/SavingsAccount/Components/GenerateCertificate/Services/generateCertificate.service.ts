import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { GetAccountCertificationIn } from '../MethodParameters/GetAccountCertificationIn';
import { GetAccountCertificationOut } from '../MethodParameters/GetAccountCertificationOut';
import { DocumentTypesGc, GetDocumentTypesOut } from '../MethodParameters/GetDocumentTypeGc';
import { GetProductTypesOut } from '../MethodParameters/GetProductTypes';
import { GetUserProductsOut } from '../MethodParameters/GetUserProductsOut';

@Injectable({
  providedIn: 'root'
})
export class GenerateCertificateService {

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
    return this.proxy.executePost('savingsAccount/getUserProducts', input).pipe(map((response) => {
      return this.mapGetUserProductsGc(response);
    }))

  }

  private mapGetUserProductsGc(input: any) {
    return <GetUserProductsOut>input;
  }


  getProductTypesGc() {
    return this.proxy.executeGet('savingsAccount/getProductTypesGc').pipe(map((response) => {
      return this.mapGetProductTypesGc(response);
    }))

  }

  mapGetProductTypesGc(input: any) {
    return <GetProductTypesOut>input;
  }

  getAccountCertificationGc(input: GetAccountCertificationIn) {
    return this.proxy.executePost('savingsAccount/getAccountCertification', input).pipe(map((response) => {
      return this.mapGetAccountCertificationGc(response);
    }))

  }

  mapGetAccountCertificationGc(input: any) {
    return <GetAccountCertificationOut>input;
  }
}
