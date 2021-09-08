import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { BlankComponent } from '../Shared/Components/Layouts/Blank/blank.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const AministrationRoutes: Routes = [
  {
    path: '',
    component: BlankComponent,
    loadChildren: () => import('./Components/Authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'Authentication',
    component: FullComponent,
    // canActivate: [AuthGuard],
    loadChildren: () => import('./Components/Authentication/authentication.module').then(module => module.AuthenticationModule)
  }
];

export const ADMINISTRATION_ROUTES = RouterModule.forChild(AministrationRoutes);
