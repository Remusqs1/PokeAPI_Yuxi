import { Proxy } from '../../../../Commons/Services/proxy';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetPermissionByFilterIn } from '../MethodParameters/getPermissionByFilterIn';
import { GetPermissionByFilterOut } from '../MethodParameters/getPermissionByFilterOut';
import { GetPermissionByRoleIn } from '../MethodParameters/getPermissionByRoleIn';
import { GetPermissionByRoleOut } from '../MethodParameters/getPermissionByRoleOut';
import { CreatePermissionIn } from '../MethodParameters/createPermissionIn';
import { CreatePermissionOut } from '../MethodParameters/createPermissionOut';
import { UpdatePermissionIn } from '../MethodParameters/updatePermissionIn';
import { UpdatePermissionOut } from '../MethodParameters/updatePermissionOut';
import { GetPermissionByRoleEditIn } from '../MethodParameters/getPermissionByRoleEditIn';
import { GetPermissionByRoleEditOut } from '../MethodParameters/getPermissionByRoleEditOut';


@Injectable()
export class PermissionService {
  constructor(private proxy: Proxy) { }

  getPermissionByFilter(input: GetPermissionByFilterIn): Observable<GetPermissionByFilterOut> {
    const response = this.proxy.executePost('GetPermissionByFilter', input, null).pipe(
      map((resp) => this.mapGetPermissionByFilterDataResponse(resp)));
    return response;
  }

  mapGetPermissionByFilterDataResponse(info: any): GetPermissionByFilterOut {
    const result = <GetPermissionByFilterOut>info;
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

  createPermission(input: CreatePermissionIn): Observable<CreatePermissionOut> {
    const response = this.proxy.executePost('CreatePermission', input, null).pipe(
      map((resp) => this.mapCreatePermissionDataResponse(resp)));
    return response;
  }

  mapCreatePermissionDataResponse(info: any): CreatePermissionOut {
    const result = <CreatePermissionOut>info;
    return result;
  }

  updatePermission(input: UpdatePermissionIn): Observable<UpdatePermissionOut> {
    const response = this.proxy.executePost('UpdatePermission', input, null).pipe(
      map((resp) => this.mapUpdatePermissionDataResponse(resp)));
    return response;
  }

  mapUpdatePermissionDataResponse(info: any): UpdatePermissionOut {
    const result = <UpdatePermissionOut>info;
    return result;
  }

  getPermissionByRoleEdit(input: GetPermissionByRoleEditIn): Observable<GetPermissionByRoleEditOut> {
    const response = this.proxy.executePost('GetPermissionByRoleEdit', input, null).pipe(
      map((resp) => this.mapgetPermissionByRoleEditDataResponse(resp)));
    return response;
  }

  mapgetPermissionByRoleEditDataResponse(info: any): GetPermissionByRoleEditOut {
    const result = <GetPermissionByRoleEditOut>info;
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
