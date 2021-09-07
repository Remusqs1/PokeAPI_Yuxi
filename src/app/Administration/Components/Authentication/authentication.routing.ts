import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';


const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'ResetPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'ChangePasswordi',
    component: ChangePasswordComponent
  },
  {
    path: 'ChangePassword/:id',
    component: ChangePasswordComponent
  }
];

export const AUTHENTICATION_ROUTES = RouterModule.forChild(AuthenticationRoutes);
