import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { RegisterComponent } from './Components/Register/register.component';

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
  },
  {
    path: 'Register',
    component: RegisterComponent
  }
];

export const AUTHENTICATION_ROUTES = RouterModule.forChild(AuthenticationRoutes);
