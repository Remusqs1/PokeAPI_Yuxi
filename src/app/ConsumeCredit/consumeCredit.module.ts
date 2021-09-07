import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { CONSUMECREDIT_ROUTES } from './consumeCredit.routing';


@NgModule({
  imports: [
    SharedModule,
    CONSUMECREDIT_ROUTES
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
export class ConsumeCreditModule { }