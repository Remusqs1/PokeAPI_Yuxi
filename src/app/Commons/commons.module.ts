import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SharedModule } from '../Shared/shared.module';
import { COMMONS_ROUTES } from './commons.routing';
import { NavBarComponent } from './Components/NavBar/navbar.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    SharedModule,
    COMMONS_ROUTES
  ],
  declarations: [
    NavBarComponent
  ],
  exports: [
    NavBarComponent
  ],
  providers: [

  ]
})

export class CommonsModule { }

