import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { ADMINISTRATION_ROUTES } from './administration.routing';

@NgModule({
  imports: [
    SharedModule,
    ADMINISTRATION_ROUTES
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: []
})
export class AdministrationModule { }
