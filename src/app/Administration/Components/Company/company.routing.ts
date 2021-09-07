import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from '../Company/Components/company.component';

const CompanyRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.administration.company.title',
      urls: [
        { title: 'route.breadcrumb.administration.company.url', url: '/Company' },
        { title: 'route.breadcrumb.administration.company.url' }
      ]
    },
    component: CompanyComponent
  },
];

export const COMPANY_ROUTES = RouterModule.forChild(CompanyRoutes);
