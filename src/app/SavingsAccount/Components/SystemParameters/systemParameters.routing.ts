import { Routes, RouterModule } from '@angular/router';
import { SystemParametersComponent } from './Components/system-parameters/system-parameters.component';


const SystemParametersRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Parámetros cuenta de ahorros',
      urls: [
        { title: 'route.breadcrumb.management.campaign.url', url: '/SystemParameters' },
        { title: 'route.breadcrumb.management.campaign.url' }
      ]
    },
    component: SystemParametersComponent
  },
];

// tslint:disable-next-line:eofline
export const SYSTEMPARAMETERS_ROUTES = RouterModule.forChild(SystemParametersRoutes);