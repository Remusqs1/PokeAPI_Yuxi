import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proxy } from '../../../../Commons/Services/proxy';
import { EditParametersIn } from '../MethodParameters/editParametersIn';

@Injectable()
export class SystemParametersService {

  constructor(private proxy: Proxy) { }

  getParameters(): Observable<any> {
    return this.proxy.executeGet('savingsAccount/getParameters');
  }

  updateParameter(input: EditParametersIn): Observable<any> {
    return this.proxy.executePost('savingsAccount/updateParameter', input, null);
  }
}
