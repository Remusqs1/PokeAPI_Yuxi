import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const routes: Routes = [
  {
    path: 'CertificateNoLink',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/CertificateNoLink/certificatenolink.module').then(module => module.CertificatenolinkModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CertificateRoutingModule {}