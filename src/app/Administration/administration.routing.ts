import { Routes, RouterModule } from '@angular/router';

const AministrationRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Components/Authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'Authentication',
    loadChildren: () => import('./Components/Authentication/authentication.module').then(module => module.AuthenticationModule)
  }
];

export const ADMINISTRATION_ROUTES = RouterModule.forChild(AministrationRoutes);
