import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Administration/administration.module').then(module => module.AdministrationModule)
  },
  {
    path: '',
    loadChildren: () => import('./Commons/commons.module').then(module => module.CommonsModule)
  },
  {
    path: '',
    loadChildren: () => import('./Management/management.module').then(module => module.ManagementModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
