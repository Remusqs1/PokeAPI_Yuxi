import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { ACCOUNTS_ROUTES } from './accounts.routing';

@NgModule({
  imports: [
    SharedModule,
    ACCOUNTS_ROUTES
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
export class AccountsModule { }