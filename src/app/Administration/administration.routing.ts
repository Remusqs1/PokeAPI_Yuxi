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
    canActivate: [AuthGuard],
    loadChildren: () => import('./Components/Authentication/authentication.module').then(module => module.AuthenticationModule)
  },
  {
    path: 'Help',
    component: FullComponent,
    canActivate: [AuthGuard],
    loadChildren: () => import('./Components/Help/helps.module').then(module => module.HelpsModule)
  },
  {
    path: 'Profiles',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Profile/profiles.module').then(module => module.ProfilesModule)
  },
  {
    path: 'Roles',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Role/roles.module').then(module => module.RolesModule)
  },
  {
    path: 'Permissions',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Permission/permissions.module').then(module => module.PermissionsModule)
  },
  {
    path: 'Users',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/User/user.module').then(module => module.UsersModule)
  },
  {
    path: 'Home-page',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Home-Config/homeConfig.module').then(module => module.HomeConfigModule)
  },
  // {
  //   path: 'Company',
  //   canActivate: [AuthGuard],
  //   component: FullComponent,
  //   loadChildren: () => import('./Components/Company/company.module').then(module => module.CompanyModule)
  // },
  {
    path: 'Services',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/GlobalServices/globalServices.module').then(module => module.GlobalServicesModule)
  },
];

export const ADMINISTRATION_ROUTES = RouterModule.forChild(AministrationRoutes);
