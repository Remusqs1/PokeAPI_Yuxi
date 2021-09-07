import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../Shared/shared.module';

import { ReportRoutingModule } from './report.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ReportRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],exports:[
    CommonModule,
    TranslateModule
  ],
  providers:[

  ]
})
export class ReportModule { }
