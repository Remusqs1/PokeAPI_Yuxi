import { Routes, RouterModule } from '@angular/router';
import { GlobalServicesComponent } from './Components/globalServices.component';

const GlobalServicesRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.administration.services.title',
      urls: [
        { title: 'route.breadcrumb.administration.services.url', url: '/Services' },
        { title: 'route.breadcrumb.administration.services.url' }
      ]
    },
    component: GlobalServicesComponent
  },
];

export const GLOBALSERVICES_ROUTES = RouterModule.forChild(GlobalServicesRoutes);