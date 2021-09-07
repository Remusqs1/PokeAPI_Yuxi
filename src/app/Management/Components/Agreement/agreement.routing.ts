import { Routes, RouterModule } from '@angular/router';
import { AgreementComponent } from './Components/Agreement/agreement.component';


const AgreementRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.agreement.title',
      urls: [
        { title: 'route.breadcrumb.management.agreement.url', url: '/Agreement' },
        { title: 'route.breadcrumb.management.agreement.url' }
      ]
    },
    component: AgreementComponent
  },
];

export const AGREEMENT_ROUTES = RouterModule.forChild(AgreementRoutes);