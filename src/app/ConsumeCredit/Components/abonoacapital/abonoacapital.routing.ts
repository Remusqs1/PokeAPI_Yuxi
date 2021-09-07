import { Routes, RouterModule } from '@angular/router';
import { AbonoacapitalComponent } from './Components/abonoacapital.component';

const AbonoacapitalRoutes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.abonoacapital.url', url: '/abonoacapital' },
        { title: 'route.breadcrumb.consumeCredit.abonoacapital.url' }
      ]
    },
    component: AbonoacapitalComponent
  },
];

export const ABONOACAPITAL_ROUTES = RouterModule.forChild(AbonoacapitalRoutes);
