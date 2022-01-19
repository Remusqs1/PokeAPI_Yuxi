import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './Components/Login/login.component';
import { AUTHENTICATION_ROUTES } from './authentication.routing';
import { AuthenticationFormService } from './Services/authentication.form.service';
import { RegisterComponent } from './Components/Register/register.component';
import { SharedModule } from '../../../Shared/shared.module';
import { CommonService } from '../../../Commons/Services/common.service';

@NgModule({
  imports: [
    CommonModule,
    AUTHENTICATION_ROUTES,
    NgbModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent
  ],
  providers: [
    AuthenticationFormService,
    CommonService
  ]
})

export class AuthenticationModule { }
