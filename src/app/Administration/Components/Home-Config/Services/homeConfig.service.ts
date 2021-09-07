import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../../environments/environment';
import { Proxy } from '../../../../Commons/Services/proxy';
import { GetUserProductsOut } from '../../../../SavingsAccount/Components/GenerateCertificate/MethodParameters/GetUserProductsOut';
import { CreateHomeConfigIn } from '../MethodParameters/CreateHomeConfigIn';

@Injectable({
    providedIn: 'root'
})
export class HomeConfigService {
    public url: string;
    constructor(
        private proxy: Proxy,
        private http: HttpClient) {
            this.url = environment.webApiBaseUrl;
    }
    getHomeConfig(controller: string, input: any): Observable<any> {
        return this.proxy.executePost(controller, input, null).pipe(map((response) => {
            return this.mapHomeConfig(response);
        }));
    }
    mapHomeConfig(input: any) {
        return <any>input;
    }
    createUpdateHomeConfig(controller: string, input: CreateHomeConfigIn): Observable<any>{
        return this.proxy.executePost(controller, input, null).pipe(map((response) => {
            return this.mapCreateHomeConfig(response);
        })); 
    }
    mapCreateHomeConfig(input: any) {
        return <any>input;
    }
}


