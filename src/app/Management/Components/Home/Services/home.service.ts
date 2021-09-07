import { Injectable } from '@angular/core';
import { Proxy } from '../../../../Commons/Services/proxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class HomeService {

    constructor(private proxy: Proxy) { }

}
