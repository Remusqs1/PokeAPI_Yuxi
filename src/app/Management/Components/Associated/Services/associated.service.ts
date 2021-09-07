import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { OTPForwardingOut } from '../MethodParameters/oTPForwardingOut';
import { OTPForwardingIn } from '../MethodParameters/oTPForwardingIn';


@Injectable()
export class AssociatedService {

    constructor(private proxy: Proxy) { }

    oTPForwarding(input: OTPForwardingIn): Observable<OTPForwardingOut> {
        const response = this.proxy.executePost('OTPForwarding', input, null).pipe(
            map((resp) => this.mapOTPForwardingDataResponse(resp)));
        return response;
    }

    mapOTPForwardingDataResponse(info: any): OTPForwardingOut {
        const result = <OTPForwardingOut>info;
        return result;
    }    

}
