import { Proxy } from '../../../../Commons/Services/proxy';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class HelpService {
  constructor(private proxy: Proxy) { }

}
