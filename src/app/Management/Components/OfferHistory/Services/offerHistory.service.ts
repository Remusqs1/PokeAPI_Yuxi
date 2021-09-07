import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GetOffersHistoryFilterMoIn } from '../MethodParameters/getOffersHistoryFilterMoIn';
import { GetOffersHistoryFilterMoOut } from '../MethodParameters/getOffersHistoryFilterMoOut';
import { GetHistoricStepMoOut } from '../MethodParameters/getHistoricStepMoOut';
import { GetHistoricStepMoIn } from '../MethodParameters/getHistoricStepMoIn';


@Injectable()
export class OfferHistoryService {

    constructor(private proxy: Proxy) { }
    
    getOffersHistoryFilter(input: GetOffersHistoryFilterMoIn): Observable<GetOffersHistoryFilterMoOut> {
        const response = this.proxy.executePost('OfferHistory/GetOffersHistoryFilter', input, null).pipe(
          map((resp) => this.mapGetOffersHistoryFilterDataResponse(resp)));
        return response;
      }
    
      mapGetOffersHistoryFilterDataResponse(info: any): GetOffersHistoryFilterMoOut {
        const result = <GetOffersHistoryFilterMoOut>info;
        return result;
      }
    
      getHistoricStep(input: GetHistoricStepMoIn): Observable<GetHistoricStepMoOut> {
        const response = this.proxy.executePost('OfferHistory/GetHistoricStep', input, null).pipe(
          map((resp) => this.mapGetHistoricStepDataResponse(resp)));
        return response;
      }
    
      mapGetHistoricStepDataResponse(info: any): GetHistoricStepMoOut {
        const result = <GetHistoricStepMoOut>info;
        return result;
      }
    

}
