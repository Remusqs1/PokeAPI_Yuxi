import { Routes, RouterModule } from '@angular/router';
import { ParametersComponent } from './Components/parameters/parameters.component';


const ParametersRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Parámetros vinculación digital',
      urls: [
        { title: 'route.breadcrumb.management.campaign.url', url: '/Parameters' },
        { title: 'route.breadcrumb.management.campaign.url' }
      ]
    },
    component: ParametersComponent
  },
];

// tslint:disable-next-line:eofline
export const PARAMETERS_ROUTES = RouterModule.forChild(ParametersRoutes);