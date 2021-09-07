import { Proxy } from '../../../../Commons/Services/proxy';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetRoleByFilterIn } from '../MethodParameters/getRoleByFilterIn';
import { GetRoleByFilterOut } from '../MethodParameters/getRoleByFilterOut';
import { GetRolesIn } from '../MethodParameters/getRolesIn';
import { GetRolesOut } from '../MethodParameters/getRolesOut';
import { CreateRoleIn } from '../MethodParameters/createRoleIn';
import { CreateRoleOut } from '../MethodParameters/createRoleOut';
import { UpdateRoleIn } from '../MethodParameters/updateRoleIn';
import { UpdateRoleOut } from '../MethodParameters/updateRoleOut';
import { UpdateRolePermissionIn } from '../MethodParameters/updateRolePermissionIn';
import { UpdateRolePermissionOut } from '../MethodParameters/updateRolePermissionOut';


@Injectable()
export class RoleService {
  constructor(private proxy: Proxy) { }

  getRoleByFilter(input: GetRoleByFilterIn): Observable<GetRoleByFilterOut> {
    const response = this.proxy.executePost('GetRoleByFilter', input, null).pipe(
      map((resp) => this.mapGetRoleByFilterDataResponse(resp)));
    return response;
  }

  mapGetRoleByFilterDataResponse(info: any): GetRoleByFilterOut {
    const result = <GetRoleByFilterOut>info;
    return result;
  }

  getRoles(input: GetRolesIn): Observable<GetRolesOut> {
    const response = this.proxy.executePost('GetRoles', input, null).pipe(
      map((resp) => this.mapGetRolesDataResponse(resp)));
    return response;
  }

  mapGetRolesDataResponse(info: any): GetRolesOut {
    const result = <GetRolesOut>info;
    return result;
  }

  createRole(input: CreateRoleIn): Observable<CreateRoleOut> {
    const response = this.proxy.executePost('CreateRole', input, null).pipe(
      map((resp) => this.mapCreateRoleDataResponse(resp)));
    return response;
  }

  mapCreateRoleDataResponse(info: any): CreateRoleOut {
    const result = <CreateRoleOut>info;
    return result;
  }

  updateRole(input: UpdateRoleIn): Observable<UpdateRoleOut> {
    const response = this.proxy.executePost('UpdateRole', input, null).pipe(
      map((resp) => this.mapUpdateRoleDataResponse(resp)));
    return response;
  }

  mapUpdateRoleDataResponse(info: any): UpdateRoleOut {
    const result = <UpdateRoleOut>info;
    return result;
  }

  updateRolePermission(input: UpdateRolePermissionIn): Observable<UpdateRolePermissionOut> {
    const response = this.proxy.executePost('UpdateRolePermission', input, null).pipe(
      map((resp) => this.mapUpdateRolePermissionDataResponse(resp)));
    return response;
  }

  mapUpdateRolePermissionDataResponse(info: any): UpdateRolePermissionOut {
    const result = <UpdateRolePermissionOut>info;
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
