import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Proxy } from '../../../../Commons/Services/proxy';
import { ResetKeyIn } from '../MethodParameters/resetKeyIn';
import { ResetKeyOut } from '../MethodParameters/resetKeyOut';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ResetKeyService {

  constructor(private proxy: Proxy) { }

  resetKey(input: ResetKeyIn): Observable<any> {
    return this.proxy.executePost('savingsAccount/resetKey', input, null).pipe(
      catchError(this.handleError.bind(this)));
  }

  mapResetKeyDataResponse(info: any): ResetKeyOut {
    const result = <ResetKeyOut>info;
    return result;
  }

  getDocumentTypes(): Observable<any> {
    return this.proxy.executeGet('parameter/getResetKeyDocumentTypes');
  }

  handleError(errorResponse: HttpErrorResponse) {
    // return an observable with a meaningful error message to the end user
    return throwError(errorResponse);
  }
}
