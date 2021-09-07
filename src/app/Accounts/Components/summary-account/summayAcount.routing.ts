import { Routes, RouterModule } from '@angular/router';
import { SummaryAccountComponent }  from '../summary-account/Components/summary-account.component';

const SummariARoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Resumen cuenta',
      urls: [
        { title: 'route.breadcrumb.cuentas.movements.url', url: '/summaryacount' },
        { title: 'route.breadcrumb.cuentas.movements.url' }
      ]
    },
    component: SummaryAccountComponent
  },
];

export const SUMMARYaCOUNT_ROUTES = RouterModule.forChild(SummariARoutes);
