import { Injectable } from '@angular/core';
import { Proxy } from '../../Commons/Services/proxy';

@Injectable()
export class AdministrationService {

  constructor(private proxy: Proxy) { }

}
