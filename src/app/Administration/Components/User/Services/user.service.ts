import { Proxy } from '../../../../Commons/Services/proxy';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetUserByFilterIn } from '../MethodParameters/getUserByFilterIn';
import { GetUserByFilterOut } from '../MethodParameters/getUserByFilterOut';
import { GetUserIn } from '../MethodParameters/getUserIn';
import { GetUserOut } from '../MethodParameters/getUserOut';
import { CreateMultipleUserIn, CreateUserIn } from '../MethodParameters/createUserIn';
import { CreateMultipleUserOut, CreateUserOut } from '../MethodParameters/createUserOut';
import { UpdateUserIn } from '../MethodParameters/updateUserIn';
import { UpdateUserOut } from '../MethodParameters/updateUserOut';
import { EmailUserValidationIn } from '../MethodParameters/emailUserValidationIn';
import { EmailUserValidationOut } from '../MethodParameters/emailUserValidationOut';
import { GetCommercialForcesOut } from '../MethodParameters/GetCommercialForcesOut';


@Injectable()
export class UserService {
  constructor(private proxy: Proxy) { }

  getUserByFilter(input: GetUserByFilterIn): Observable<GetUserByFilterOut> {
    const response = this.proxy.executePost('GetUserByFilter', input, null).pipe(
      map((resp) => this.mapGetUserByFilterDataResponse(resp)));
    return response;
  }

  mapGetUserByFilterDataResponse(info: any): GetUserByFilterOut {
    const result = <GetUserByFilterOut>info;
    return result;
  }

  getUser(input: GetUserIn): Observable<GetUserOut> {
    const response = this.proxy.executePost('GetUser', input, null).pipe(
      map((resp) => this.mapGetUserDataResponse(resp)));
    return response;
  }

  mapGetUserDataResponse(info: any): GetUserOut {
    const result = <GetUserOut>info;
    return result;
  }

  createUser(input: CreateUserIn): Observable<CreateUserOut> {
    const response = this.proxy.executePost('CreateUser', input, null).pipe(
      map((resp) => this.mapCreateUserDataResponse(resp)));
    return response;
  }

  mapCreateUserDataResponse(info: any): CreateUserOut {
    const result = <CreateUserOut>info;
    return result;
  }

  createMultipleUser(input: CreateMultipleUserIn): Observable<CreateMultipleUserOut> {
    const response = this.proxy.executePost('CreateMultipleUser', input, null).pipe(
      map((resp) => this.mapCreateMultipleUserDataResponse(resp)));
    return response;
  }

  mapCreateMultipleUserDataResponse(info: any): CreateMultipleUserOut {
    const result = <CreateMultipleUserOut>info;
    return result;
  }

  updateUser(input: UpdateUserIn): Observable<UpdateUserOut> {
    const response = this.proxy.executePost('UpdateUser', input, null).pipe(
      map((resp) => this.mapUpdateUserDataResponse(resp)));
    return response;
  }

  mapUpdateUserDataResponse(info: any): UpdateUserOut {
    const result = <UpdateUserOut>info;
    return result;
  }

  emailUserValidation(input: EmailUserValidationIn): Observable<EmailUserValidationOut> {
    const response = this.proxy.executePost('EmailUserValidation', input, null).pipe(
      map((resp) => this.mapEmailUserValidationDataResponse(resp)));
    return response;
  }

  mapEmailUserValidationDataResponse(info: any): EmailUserValidationOut {
    const result = <EmailUserValidationOut>info;
    return result;
  }

  getCommercialForces(): Observable<any> {
    const response = this.proxy.executeGet('catalogsBizagi/getCommercialForces').pipe(
      map((resp) => this.mapGetCommercialForcesResponse(resp)));
    return response;
  }

  mapGetCommercialForcesResponse(info: any): GetCommercialForcesOut {
    const result = <GetCommercialForcesOut>info;
    return result;
  }


  // getProfileActions(input: GetProfileActionsIn): Observable<GetProfileActionsOut> {
  //   const response = this.proxy.executePost('Profile/GetProfileActions', input, null).pipe(
  //     map((resp) => this.mapGetProfileActionsDataResponse(resp)));
  //   return response;
  // }

  // mapGetProfileActionsDataResponse(info: any): GetProfileActionsOut {
  //   const result = <GetProfileActionsOut>info;
  //   return result;
  // }

  // UpdateProfileStatus(input: UpdateProfileStatusIn): Observable<UpdateProfileStatusOut> {
  //   const response = this.proxy.executePost('Profile/UpdateProfileStatus', input, null).pipe(
  //     map((resp) => this.mapUpdateProfileStatusDataResponse(resp)));
  //   return response;
  // }

  // mapUpdateProfileStatusDataResponse(info: any): UpdateProfileStatusOut {
  //   const result = <UpdateProfileStatusOut>info;
  //   return result;
  // }

  // generateProfilesReport(input: GenerateProfilesReportIn): Observable<GenerateProfilesReportOut> {
  //   const response = this.proxy.executePost('Profile/GenerateProfilesReport', input, null).pipe(
  //     map((resp) => this.mapGenerateProfilesReportDataResponse(resp)));
  //   return response;
  // }

  // mapGenerateProfilesReportDataResponse(info: any): GenerateProfilesReportOut {
  //   const result = <GenerateProfilesReportOut>info;
  //   return result;
  // }
}
