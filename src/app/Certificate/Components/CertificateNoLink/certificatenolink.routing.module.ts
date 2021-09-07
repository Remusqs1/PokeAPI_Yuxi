import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
import {CertificatenolinkComponent } from './Components/certificatenolink.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.certificatenolink.url', url: '/CertificateNoLink' },
        { title: 'route.breadcrumb.consumeCredit.certificatenolink.url' }
      ]
    },
    component: CertificatenolinkComponent
  }, 
]; 
 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CertificatenolinkRoutingModule { }
