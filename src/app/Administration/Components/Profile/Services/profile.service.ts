
import { GetUserByFilterIn } from '../MethodParameters/getUserByFilterIn';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetUserByFilterOut } from '../MethodParameters/getUserByFilterOut';
import { CreateProfileIn } from '../MethodParameters/createProfileIn';
import { CreateProfileOut } from '../MethodParameters/createProfileOut';
import { UpdateProfileIn } from '../MethodParameters/updateProfileIn';
import { UpdateProfileOut } from '../MethodParameters/updateProfileOut';
import { GetProfileActionsIn } from '../MethodParameters/getProfileActionsIn';
import { GetProfileActionsOut } from '../MethodParameters/getProfileActionsOut';
import { UpdateProfileStatusOut } from '../MethodParameters/updateProfileStatusOut';
import { UpdateProfileStatusIn } from '../MethodParameters/updateProfileStatusIn';
import { GenerateProfilesReportIn } from '../MethodParameters/generateProfilesReportIn';
import { GenerateProfilesReportOut } from '../MethodParameters/generateProfilesReportOut';



@Injectable()
export class ProfileService {
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

  // createProfile(input: CreateProfileIn): Observable<CreateProfileOut> {
  //   const response = this.proxy.executePost('Profile/CreateProfile', input, null).pipe(
  //     map((resp) => this.mapCreateProfileDataResponse(resp)));
  //   return response;
  // }

  // mapCreateProfileDataResponse(info: any): CreateProfileOut {
  //   const result = <CreateProfileOut>info;
  //   return result;
  // }

  // updateProfile(input: UpdateProfileIn): Observable<UpdateProfileOut> {
  //   const response = this.proxy.executePost('Profile/UpdateProfile', input, null).pipe(
  //     map((resp) => this.mapUpdateProfileDataResponse(resp)));
  //   return response;
  // }

  // mapUpdateProfileDataResponse(info: any): UpdateProfileOut {
  //   const result = <UpdateProfileOut>info;
  //   return result;
  // }

  getProfileActions(input: GetProfileActionsIn): Observable<GetProfileActionsOut> {
    const response = this.proxy.executePost('Profile/GetProfileActions', input, null).pipe(
      map((resp) => this.mapGetProfileActionsDataResponse(resp)));
    return response;
  }

  mapGetProfileActionsDataResponse(info: any): GetProfileActionsOut {
    const result = <GetProfileActionsOut>info;
    return result;
  }

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
