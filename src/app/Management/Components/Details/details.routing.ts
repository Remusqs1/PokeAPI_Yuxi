import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './Components/details.component';

const DetailsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.home.title',
      urls: [
        { title: 'route.breadcrumb.management.home.url', url: '/Details' },
        { title: 'route.breadcrumb.management.home.url' }
      ]
    },
    component: DetailsComponent
  },
];

export const DETAILS_ROUTES = RouterModule.forChild(DetailsRoutes);