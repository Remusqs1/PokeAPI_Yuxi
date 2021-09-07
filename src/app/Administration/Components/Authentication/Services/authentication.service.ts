import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
import { ValidatePasswordIn } from '../MethodParameters/validatePasswordIn';
import { ValidatePasswordOut } from '../MethodParameters/validatePasswordOut';
import { CloseSessionMoIn } from '../MethodParameters/closeSessionMoIn';
import { CloseSessionMoOut } from '../MethodParameters/closeSessionMoOut';

import { LoginIn, LoginSecurityIn } from '../MethodParameters/LoginIn';
import { LogingOut } from '../MethodParameters/LoginOut';
import { ResetPasswordIn } from '../MethodParameters/resetPasswordIn';
import { ResetPasswordOut } from '../MethodParameters/resetPasswordOut';
import { CodeValidationIn } from '../MethodParameters/codeValidationIn';
import { CodeValidationgOut } from '../MethodParameters/codeValidationOut';
import { FormControl } from '@angular/forms';
import { ChangePasswordIn } from '../MethodParameters/changePasswordIn';
import { ChangePasswordOut } from '../MethodParameters/changePasswordOut';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { GetPermissionByRoleIn } from '../../Permission/MethodParameters/getPermissionByRoleIn';
import { GetPermissionByRoleOut } from '../../Permission/MethodParameters/getPermissionByRoleOut';

interface ErrorValidate {
  [s: string]: boolean
}

@Injectable()
export class AuthenticationService {

  constructor(private proxy: Proxy, private http: HttpClient) {

  }

  AuthenticateUser(input: ValidatePasswordIn): Observable<ValidatePasswordOut> {
    const response = this.proxy.executePost('Authentication/AuthenticateUser', input, true, null).pipe(
      map((res) => this.mapAuthenticateUserDataResponse(res)));
    return response;
  }

  mapAuthenticateUserDataResponse(info: any): ValidatePasswordOut {
    const result = info as ValidatePasswordOut;
    return result;
  }

  login(input: LoginIn): Observable<LogingOut> {
    const response = this.proxy.executePost('Login', input).pipe(map((resp) => this.mapLoginDataResponse(resp)));
    return response;
  }

  mapLoginDataResponse(info: any): LogingOut {
    const result = info as LogingOut;
    return result;
  }

  closeSession(input: CloseSessionMoIn): Observable<CloseSessionMoOut> {
    const response = this.proxy.executePost('CloseSession', input).pipe(map((resp) => this.mapCloseSessionDataResponse(resp)));
    return response;
  }


  mapCloseSessionDataResponse(info: any): CloseSessionMoOut {
    const result = info as CloseSessionMoOut;
    return result;
  }

  resetPassword(input: ResetPasswordIn): Observable<ResetPasswordOut> {
    const response = this.proxy.executePost('ResetPassword', input).pipe(map((resp) => this.mapResetPasswordDataResponse(resp)));
    return response;
  }

  mapResetPasswordDataResponse(info: any): ResetPasswordOut {
    const result = info as ResetPasswordOut;
    return result;
  }

  codeValidation(input: CodeValidationIn): Observable<CodeValidationgOut> {
    const response = this.proxy.executePost('CodeValidation', input).pipe(map((resp) => this.mapCodeValidationDataResponse(resp)));
    return response;
  }

  mapCodeValidationDataResponse(info: any): CodeValidationgOut {
    const result = info as CodeValidationgOut;
    return result;
  }

  changePassword(input: ChangePasswordIn): Observable<ChangePasswordOut> {
    const response = this.proxy.executePost('ChangePassword', input).pipe(map((resp) => this.mapChangePasswordDataResponse(resp)));
    return response;
  }

  mapChangePasswordDataResponse(info: any): ChangePasswordOut {
    const result = info as ChangePasswordOut;
    return result;
  }

  getPermissionByRole(input: GetPermissionByRoleIn): Observable<GetPermissionByRoleOut> {
    const response = this.proxy.executePost('GetPermissionByRole', input, null).pipe(
      map((resp) => this.mapgetPermissionByRoleDataResponse(resp)));
    return response;
  }

  mapgetPermissionByRoleDataResponse(info: any): GetPermissionByRoleOut {
    const result = <GetPermissionByRoleOut>info;
    return result;
  }

}
