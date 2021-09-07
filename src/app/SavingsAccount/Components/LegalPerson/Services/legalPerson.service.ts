import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LegalPersonIn } from '../MethodParameters/legalPersonIn';
import { LegalPersonOut } from '../MethodParameters/legalPersonOut';
@Injectable()
export class LegalPersonService {

    constructor(private proxy: Proxy) { }

    createLegalPerson(input: LegalPersonIn): Observable<LegalPersonOut> {
        const response = this.proxy.executePost('apiUser/associateUser', input, null).pipe(
        map((resp) => this.mapcreateLegalPersonResponse(resp)));
        return response;
    }

    mapcreateLegalPersonResponse(info: any): LegalPersonOut {
        const result = <LegalPersonOut>info;
        return result;
      }

    getDocumentTypes(): Observable<any> {
        return this.proxy.executeGet('parameter/getLegalPersonDocumentTypes');
    }

    getLanguages(): Observable<any> {
        return this.proxy.executeGet('parameter/getLegalPersonLanguages');
    }

}