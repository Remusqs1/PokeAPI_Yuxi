import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { SAVINGSACCOUNT_ROUTES } from './savingsAccount.routing';


@NgModule({
  imports: [
    SharedModule,
    SAVINGSACCOUNT_ROUTES
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [
  ]
})
export class SavingsAccountModule { }
