import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Components/Login/login.component';
import { RegisterComponent } from './Components/Register/register.component';

const AuthenticationRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'Register',
    component: RegisterComponent
  }
];

export const AUTHENTICATION_ROUTES = RouterModule.forChild(AuthenticationRoutes);
