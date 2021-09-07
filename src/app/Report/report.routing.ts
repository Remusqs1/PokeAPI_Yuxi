import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../Shared/Services/auth.guard';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';

const routes: Routes = [
  {
    path: 'Audit',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Audit/audit.module').then(module => module.AuditModule)
  },
  {
    path: 'Client',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Client/client.module').then(module => module.ClientModule)
  },
  {
    path: 'CampaignValidation',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/CampaignValid/campaignvalid.module').then(module => module.CampaignValidModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
