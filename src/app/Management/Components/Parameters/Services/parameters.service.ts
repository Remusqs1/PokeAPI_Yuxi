import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EditParametersIn } from '../MethodParameters/editParametersIn';
import { editParametersOut } from '../MethodParameters/editParametersOut';
import { CreateParameterIn } from '../MethodParameters/createParameterIn';
import { CreateParameterOut } from '../MethodParameters/createParameterOut';

@Injectable()
export class ParametersService {

  constructor(private proxy: Proxy) { }

  getParameters(): Observable<any> {
    return this.proxy.executeGet('digitalLink/getParameters');
  }

  updateParameter(input: EditParametersIn) {
    return this.proxy.executePost('digitalLink/updateParameter', input, null)
      .pipe(map((response) => {
        return this.mapUpdateparameters(response);
      }));
  }
  private mapUpdateparameters(response: any) {
    return <editParametersOut>response;
  }

  createParameter(input: CreateParameterIn) {
    return this.proxy.executePost('digitalLink/createParameter', input, null).pipe(map((response) => {
      return this.mapCreateParameter(response);
    }))
  }

  private mapCreateParameter(response: any) {
    return <CreateParameterOut>response;
  }


}
