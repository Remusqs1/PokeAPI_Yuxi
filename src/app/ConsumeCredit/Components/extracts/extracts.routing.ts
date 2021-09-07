import { Routes, RouterModule } from '@angular/router';
import { ExtractsComponent } from './Components/extracts.component';

const ExtractsRoutes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.extracts.url', url: '/extracts' },
        { title: 'route.breadcrumb.consumeCredit.extracts.url' }
      ]
    },
    component: ExtractsComponent
  },
];

export const EXTRACTS_ROUTES = RouterModule.forChild(ExtractsRoutes);
