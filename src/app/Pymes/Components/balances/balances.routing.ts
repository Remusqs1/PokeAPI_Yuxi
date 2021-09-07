import { Routes, RouterModule } from '@angular/router';
import { BalancesComponent } from './Components/balances.component';

const CompanyRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Certificado al día',
      urls: [
        { title: 'route.breadcrumb.pymes.balances.url', url: '/balances' },
        { title: 'route.breadcrumb.pymes.balances.url' }
      ]
    },
    component: BalancesComponent
  },
];

export const BALANCES_ROUTES = RouterModule.forChild(CompanyRoutes);
