import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { MANAGEMENT_ROUTES } from './management.routing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonService } from '../Commons/Services/common.service';

@NgModule({
  imports: [
    SharedModule,
    MANAGEMENT_ROUTES
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [ ],
  providers: [
    CommonService
  ]
})
export class ManagementModule { }
