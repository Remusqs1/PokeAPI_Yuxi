import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
//import {  } from '../MethodsParameter/CreateAgreementOut'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CreateAgreementOut } from '../MethodsParameter/createAgreementOut';
import { CreateAgreementIn } from '../MethodsParameter/createAgreementIn';
import { DeleteAgreementOut } from '../MethodsParameter/deleteAgreementOut';
import { DeleteAgreementIn } from '../MethodsParameter/deleteAgreementIn';
import { UpdateAgreementIn } from '../MethodsParameter/updateAgreementIn';
import { UpdateAgreementOut } from '../MethodsParameter/updateAgreementOut';
import { SelectAgreementFilterIn } from '../MethodsParameter/selectAgreementFilterIn';
import { SelectAgreementFilterOut } from '../MethodsParameter/selectAgreementFilterOut';
import { SelectDocumentAgreementIn } from '../MethodsParameter/selectDocumentAgreementIn';
import { SelectDocumentAgreementOut } from '../MethodsParameter/SelectDocumentAgreementOut';
import { AsignDocumentAgreementOut } from '../MethodsParameter/asignDocumentAgreementOut';
import { AsignDocumentAgreementIn } from '../MethodsParameter/asignDocumentAgreementIn';
@Injectable()
export class AgreementService {

    constructor(private proxy: Proxy) { }

    createAgreement(input: CreateAgreementIn): Observable<CreateAgreementOut> {
        const response = this.proxy.executePost('Agreement/CreateAgreement', input, null).pipe(
            map((resp) => this.mapCreateAgreementDataResponse(resp)));
        return response;
    }

    mapCreateAgreementDataResponse(info: any): CreateAgreementOut {
        const result = <CreateAgreementOut>info;
        return result;
    }

    deleteAgreement(input: DeleteAgreementIn): Observable<DeleteAgreementOut> {
        const response = this.proxy.executePost('Agreement/DeleteAgreement', input, null).pipe(
            map((resp) => this.mapDeleteAgreementDataResponse(resp)));
        return response;
    }

    mapDeleteAgreementDataResponse(info: any): DeleteAgreementOut {
        const result = <DeleteAgreementOut>info;
        return result;
    }

    updateAgreement(input: UpdateAgreementIn): Observable<UpdateAgreementOut> {
        const response = this.proxy.executePost('Agreement/UpdateAgreement', input, null).pipe(
            map((resp) => this.mapUpdateAgreementDataResponse(resp)));
        return response;
    }

    mapUpdateAgreementDataResponse(info: any): UpdateAgreementOut {
        const result = <UpdateAgreementOut>info;
        return result;
    }

    selectAllAgreement(input: SelectAgreementFilterIn): Observable<SelectAgreementFilterOut> {
        const response = this.proxy.executePost('Agreement/SelectAllAgreement', input, null).pipe(
            map((resp) => this.mapSelectAllAgreementDataResponse(resp)));
        return response;
    }

    mapSelectAllAgreementDataResponse(info: any): SelectAgreementFilterOut {
        const result = <SelectAgreementFilterOut>info;
        return result;
    }

    selectAgreementByName(input: SelectAgreementFilterIn): Observable<SelectAgreementFilterOut> {
        const response = this.proxy.executePost('Agreement/SelectAgreementByName', input, null).pipe(
            map((resp) => this.mapSelectAgreementByNameDataResponse(resp)));
        return response;
    }

    mapSelectAgreementByNameDataResponse(info: any): SelectAgreementFilterOut {
        const result = <SelectAgreementFilterOut>info;
        return result;
    }

    selectAgreementByDocument(input: SelectAgreementFilterIn): Observable<SelectAgreementFilterOut> {
        const response = this.proxy.executePost('Agreement/SelectAgreementByDocument', input, null).pipe(
            map((resp) => this.mapSelectAgreementByDocumentDataResponse(resp)));
        return response;
    }

    mapSelectAgreementByDocumentDataResponse(info: any): SelectAgreementFilterOut {
        const result = <SelectAgreementFilterOut>info;
        return result;
    }

    selectAllDocument(input: SelectDocumentAgreementIn): Observable<SelectDocumentAgreementOut> {
        const response = this.proxy.executePost('Agreement/SelectDocumentAgreement', input, null).pipe(
            map((resp) => this.mapSelectAllDocumentDataResponse(resp)));
        return response;
    }

    mapSelectAllDocumentDataResponse(info: any): SelectDocumentAgreementOut {
        const result = <SelectDocumentAgreementOut>info;
        return result;
    }

    asignDocumentAgreement(input: AsignDocumentAgreementIn): Observable<AsignDocumentAgreementOut> {
        const response = this.proxy.executePost('Agreement/AsignDocumentAgreement', input, null).pipe(
            map((resp) => this.mapAsignDocumentAgreementDataResponse(resp)));
        return response;
    }

    mapAsignDocumentAgreementDataResponse(info: any): AsignDocumentAgreementOut {
        const result = <AsignDocumentAgreementOut>info;
        return result;
    }

}
