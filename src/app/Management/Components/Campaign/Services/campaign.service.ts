import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateCampaignIn } from '../MethodParameters/createCampaignIn';
import { CreateCampaignOut } from '../MethodParameters/createCampaignOut';
import { UpdateCampaignIn } from '../MethodParameters/updateCampaignIn';
import { UpdateCampaignOut } from '../MethodParameters/updateCampaignOut';
import { DeleteCampaignIn } from '../MethodParameters/deleteCampaignIn';
import { DeleteCampaignOut } from '../MethodParameters/deleteCampaignOut';
import { SelectAllCampaignIn } from '../MethodParameters/selectAllCampaignIn';
import { SelectAllCampaignOut } from '../MethodParameters/selectAllCampaignOut';
import { SelectCampaignFilterIn } from '../MethodParameters/selectCampaignFilterIn';
import { SelectCampaignFilterOut } from '../MethodParameters/selectCampaignFilterOut';
import { SelectFieldIn } from '../MethodParameters/selectFieldIn';
import { SelectFieldOut } from '../MethodParameters/selectFieldOut';
import { AsignFieldCampaignIn } from '../MethodParameters/asignFieldCampaignIn';
import { AsignFieldCampaignOut } from '../MethodParameters/asignFieldCampaignOut';
import { GetCompanyIn } from '../MethodParameters/getCompanyIn';
import { GetCompanyOut } from '../MethodParameters/getCompanyOut';
import { GetCampaignsIn } from '../MethodParameters/getCampaignsIn';
@Injectable()
export class CampaignService {

    constructor(private proxy: Proxy) { }

    createCampaign(input: CreateCampaignIn): Observable<CreateCampaignOut> {
        const response = this.proxy.executePost('Campaign/CreateCampaign', input, null).pipe(
            map((resp) => this.mapCreateCampaignDataResponse(resp)));
        return response;
    }

    mapCreateCampaignDataResponse(info: any): CreateCampaignOut {
        const result = <CreateCampaignOut>info;
        return result;
    }

    updateCampaign(input: UpdateCampaignIn): Observable<UpdateCampaignOut> {
        const response = this.proxy.executePost('Campaign/UpdateCampaign', input, null).pipe(
            map((resp) => this.mapUpdateCampaignDataResponse(resp)));
        return response;
    }

    mapUpdateCampaignDataResponse(info: any): UpdateCampaignOut {
        const result = <UpdateCampaignOut>info;
        return result;
    }

    deleteCampaign(input: DeleteCampaignIn): Observable<DeleteCampaignOut> {
        const response = this.proxy.executePost('Campaign/DeleteCampaign', input, null).pipe(
            map((resp) => this.mapDeleteCampaignDataResponse(resp)));
        return response;
    }

    mapDeleteCampaignDataResponse(info: any): DeleteCampaignOut {
        const result = <DeleteCampaignOut>info;
        return result;
    }

    selectAllCampaign(input: SelectAllCampaignIn): Observable<SelectAllCampaignOut> {
        const response = this.proxy.executePost('Campaign/SelectAllCampaign', input, null).pipe(
            map((resp) => this.mapSelectAllCampaignDataResponse(resp)));
        return response;
    }

    mapSelectAllCampaignDataResponse(info: any): SelectAllCampaignOut {
        const result = <SelectAllCampaignOut>info;
        return result;
    }

    selectCampaignFilter(input: SelectCampaignFilterIn): Observable<SelectCampaignFilterOut> {
        const response = this.proxy.executePost('Campaign/CreateCampaign', input, null).pipe(
            map((resp) => this.mapSelectCampaignFilterDataResponse(resp)));
        return response;
    }

    mapSelectCampaignFilterDataResponse(info: any): SelectCampaignFilterOut {
        const result = <SelectCampaignFilterOut>info;
        return result;
    }

    selectCampaignByName(input: SelectCampaignFilterIn): Observable<SelectCampaignFilterOut> {
        const response = this.proxy.executePost('Campaign/SelectCampaignByName', input, null).pipe(
            map((resp) => this.mapSelectCampaignByNameDataResponse(resp)));
        return response;
    }

    mapSelectCampaignByNameDataResponse(info: any): SelectCampaignFilterOut {
        const result = <SelectCampaignFilterOut>info;
        return result;
    }

    selectCampaignByStatus(input: SelectCampaignFilterIn): Observable<SelectCampaignFilterOut> {
        const response = this.proxy.executePost('Campaign/SelectCampaignByStatus', input, null).pipe(
            map((resp) => this.mapSelectCampaignByStatusDataResponse(resp)));
        return response;
    }

    mapSelectCampaignByStatusDataResponse(info: any): SelectCampaignFilterOut {
        const result = <SelectCampaignFilterOut>info;
        return result;
    }

    selectField(input: SelectFieldIn): Observable<SelectFieldOut> {
        const response = this.proxy.executePost('Campaign/SelectField', input, null).pipe(
            map((resp) => this.mapSelectFieldDataResponse(resp)));
        return response;
    }

    mapSelectFieldDataResponse(info: any): SelectFieldOut {
        const result = <SelectFieldOut>info;
        return result;
    }

    asignFieldCampaign(input: AsignFieldCampaignIn): Observable<AsignFieldCampaignOut> {
        const response = this.proxy.executePost('Campaign/AsignFieldCampaign', input, null).pipe(
            map((resp) => this.mapAsignFieldCampaignDataResponse(resp)));
        return response;
    }

    mapAsignFieldCampaignDataResponse(info: any): AsignFieldCampaignOut {
        const result = <AsignFieldCampaignOut>info;
        return result;
    }

    GetCompany(input: GetCompanyIn): Observable<GetCompanyOut> {
        const response = this.proxy.executePost('Campaign/GetCompany', input, null).pipe(
            map((resp) => this.mapGetCompany(resp)));
        return response;
    }

    mapGetCompany(info: any): GetCompanyOut {
        const result = <GetCompanyOut>info;
        return result;
    }

    GetCampaigns(input: GetCampaignsIn): Observable<any> {
        return this.proxy.executePost('catalogsBizagi/getCampaign', input, null);
    }

}
