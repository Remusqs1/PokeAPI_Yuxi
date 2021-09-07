import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditComponent } from './Components/audit/audit.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.report.audit.title',
      urls: [
        { title: 'route.breadcrumb.report.audit.url', url: '/Report' },
        { title: 'route.breadcrumb.report.audit.url' }
      ]
    },
    component: AuditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuditRoutingModule { }
