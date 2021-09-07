import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
import { map } from 'rxjs/operators';
import { GetDocumentTypesOut } from '../MethodParameters/GetDocumentTypesOut';
import { PostAccountAssociationIn } from '../MethodParameters/PostAccountAssociationIn';
import { RequestSavingsAccountClientSIIFIn } from '../MethodParameters/RequestSavingsAccountClientSIIFIn';
import { GetAccountsByClientOut } from '../MethodParameters/GetAccountsByClientOut';
import { GetRequestClientSiifIn } from '../MethodParameters/GetRequestClientSiifIn';
import { GetRequestClientSiifOut } from '../MethodParameters/GetRequestClientSiifOut';
import { RequestSavingsAccountClientSIIFOut } from '../MethodParameters/RequestSavingsAccountClientSIIFOut';
import { PostAssociateAccountOut } from '../MethodParameters/PostAssociateAccountOut';
import { AccountValidationIn } from '../MethodParameters/SetAccountValidationIn';
import { AccountValidationOut } from '../MethodParameters/SetAccountValidationOut';
import { GetProductTypesSA } from '../MethodParameters/GetProductTypesSA';

@Injectable()
export class LinkingAccountsService {
  constructor(private proxy: Proxy) { }

  // getDocumentTypes() {
  //   return this.proxy.executeGet('catalogsBizagi/getIdentificationType').pipe(
  //     map((response: any) => {
  //       return this.mapGetDocumentTypes(response);
  //     })
  //   );
  // }

  // private mapGetDocumentTypes(response: any) {
  //   return <GetIdentificationTypeOut>response;
  // }

  getDocumentTypes() {
    return this.proxy.executeGet('savingsAccount/getDocumentTypesGc').pipe(
      map((response: any) => {
        return this.mapGetDocumentTypes(response);
      })
    );
  }

  private mapGetDocumentTypes(response: any) {
    return <GetDocumentTypesOut>response;
  }

  getAccountsByClient(RepeticionesSavingAccountSiifIn: RequestSavingsAccountClientSIIFIn) {
    return this.proxy
      .executePost(
        'savingsAccount/RequestSavingsAccountClientSIIF',
        RepeticionesSavingAccountSiifIn,
        null
      )
      .pipe(
        map((response) => {
          return this.mapGetAccountsByClientOut(response);
        })
      )
  }

  mapGetAccountsByClientOut(response: any) {
    return <RequestSavingsAccountClientSIIFOut>response;
  }

  getClientInformationSiif(getRequestClientSiifIn: GetRequestClientSiifIn) {
    return this.proxy.executePost('savingsAccount/getRequestClientSiifIn', getRequestClientSiifIn, null).pipe(map((response) => {
      return this.mapGetClientInformationSiifOut(response);
    }));
  }

  mapGetClientInformationSiifOut(response: any) {
    return <GetRequestClientSiifOut>response;
  }

  getProductTypesSa() {
    return this.proxy.executeGet('savingsAccount/getProductTypesSA').pipe(map((response) => {
      return this.mapGetProductTypesSa(response);
    }))
  }

  private mapGetProductTypesSa(input: any) {
    return <GetProductTypesSA>input;
  }

  associateAccount(postData: PostAccountAssociationIn) {

    return this.proxy.executePost("savingsAccount/accountAssociation", postData, null)
      .pipe(map((response) => {
        return this.mapAssociateAccountOut(response)
      }))
  }

  mapAssociateAccountOut(response: any) {
    return <PostAssociateAccountOut>response;
  }


  getAccountValidation(data: AccountValidationIn) {

    return this.proxy.executePost("savingsAccount/accountValidation", data, null)
      .pipe(map((response) => {
        return this.mapAssociateAccountOut(response)
      }))
  }

  mapAccountValidation(response: any) {
    return <AccountValidationOut>response;
  }

}
