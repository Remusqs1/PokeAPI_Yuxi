import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthGuard } from './Shared/Services/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Administration/administration.module').then(module => module.AdministrationModule)
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./Commons/commons.module').then(module => module.CommonsModule)
  },
  {
    path: '',
    // canActivate: [AuthGuard],
    loadChildren: () => import('./Management/management.module').then(module => module.ManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
