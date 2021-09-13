import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CreateUserIn } from '../MethodParameters/createUserIn';
import { CreateUserOut } from '../MethodParameters/createUserOut';

@Injectable()
export class AuthenticationService {

  constructor(private proxy: Proxy, private http: HttpClient) {

  }

  createUser(input: CreateUserIn): Observable<CreateUserOut> {
    const response = this.proxy.executePost('/CreateUser', input, true, null).pipe(
      map((res) => this.mapCreateUserDataResponse(res)));
    return response;
  }

  mapCreateUserDataResponse(info: any): CreateUserOut {
    const result = info as CreateUserOut;
    return result;
  }

}
