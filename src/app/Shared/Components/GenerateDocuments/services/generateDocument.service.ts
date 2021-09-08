import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { ResponseFileOut } from '../MethodParameters/getCertificate';
import { GetCustomerProductsOut } from '../MethodParameters/getCustomerProductsOut';
@Injectable({
  providedIn: 'root'
})

export class GenerateDocumentService {
  mapClass: string;
  constructor(private proxy: Proxy) {

  }
  getCustomerProducts(controller: string, input) {
    return this.proxy.executePost(controller, input).pipe(map((response) => {
        return this.mapCustomerProducts(response);
    }));
  }
  
  mapCustomerProducts(input: any) {
    return <GetCustomerProductsOut>input;
  }
  GenerateDocument(controller: string, input) {
    return this.proxy.executePost(controller, input).pipe(map((response) => {
      return this.mapGenerateDocument(response);
  }));
  }
  mapGenerateDocument(input: any) {
    return <ResponseFileOut>input;
  }
  formatDate(date: Date): string {
    let formatDate = '';
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    if(day <= 9 && month <=9) {
      formatDate = year + '0' + month + '0' + day;
    } else if(day <= 9 && month > 9) {
      formatDate = year + month + '0' + day;
    } else if(day > 9 && month <=9) {
      formatDate = year + '0' + month + day;
    } else if(day > 9 && month > 9) {
      formatDate = '' + year + month + day;
    }
    return formatDate;
  }
}
