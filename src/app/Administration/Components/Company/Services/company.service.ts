import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Injectable } from '@angular/core';
import { GetCompanyFiltersIn } from '../MethodParameters/getCompanyFiltersIn';
import { GetCompanyFiltersOut } from '../MethodParameters/getCompanyFiltersOut';

@Injectable()
export class CompanyService {

    constructor(private proxy: Proxy) {
    }

    getCompanyFilters(input: GetCompanyFiltersIn): Observable<GetCompanyFiltersOut> {
        const response = this.proxy.executePost('Company/GetCompanyFilters', input, null).pipe(
          map((resp) => this.mapGetCompanyFiltersDataResponse(resp)));
        return response;
    }

    mapGetCompanyFiltersDataResponse(info: any): GetCompanyFiltersOut {
        const result = <GetCompanyFiltersOut>info;
        return result;
    }

}
