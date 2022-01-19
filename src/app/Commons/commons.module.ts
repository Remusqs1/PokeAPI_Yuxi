import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../Shared/shared.module';
import { COMMONS_ROUTES } from './commons.routing';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    SharedModule,
    COMMONS_ROUTES
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [

  ]
})

export class CommonsModule { }

