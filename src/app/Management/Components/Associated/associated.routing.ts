import { Routes, RouterModule } from '@angular/router';
import { AssociatedComponent } from './Components/Associated/associated.component';


const AssociatedRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.associated.title',
      urls: [
        { title: 'route.breadcrumb.management.associated.url', url: '/Associated' },
        { title: 'route.breadcrumb.management.associated.url' }
      ]
    },
    component: AssociatedComponent
  },
];

export const ASSOCIATED_ROUTES = RouterModule.forChild(AssociatedRoutes);