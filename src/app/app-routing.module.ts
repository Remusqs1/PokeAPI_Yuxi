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
    canActivate: [AuthGuard],
    loadChildren: () => import('./Commons/commons.module').then(module => module.CommonsModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Token/token.module').then(module => module.TokenModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Management/management.module').then(module => module.ManagementModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./SavingsAccount/savingsAccount.module').then(module => module.SavingsAccountModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Report/report.module').then(module => module.ReportModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Cases/cases.module').then(module => module.CasesModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Accounts/accounts.module').then(module => module.AccountsModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Pymes/pymes.module').then(module => module.PymesModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./DocumentManager/documentmanager.module').then(module => module.DocumentManagerModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Catalogs/catalogs.module').then(module => module.CatalogsModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./ConsumeCredit/ConsumeCredit.module').then(module => module.ConsumeCreditModule)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./Certificate/certificate.module').then(module => module.CertificateModule)
  },

];


@NgModule({
  imports: [RouterModule.forRoot(routes), NgbModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
