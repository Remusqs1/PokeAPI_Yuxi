import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Components/Login/login.component';
import { AUTHENTICATION_ROUTES } from './authentication.routing';
import { SharedModule } from '../../../Shared/shared.module';
import { AuthenticationService } from './Services/authentication.service';
import { CommonService } from '../../../Commons/Services/common.service';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { AuthenticationFormService } from './Services/authentication.form.service';

@NgModule({
  imports: [
    CommonModule,
    AUTHENTICATION_ROUTES,
    NgbModule,
    SharedModule,
  ],
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    ChangePasswordComponent
  ],
  exports: [
    LoginComponent,
    ChangePasswordComponent
  ],
  providers: [
    AuthenticationService,
    AuthenticationFormService,
    CommonService
  ]
})

export class AuthenticationModule { }
