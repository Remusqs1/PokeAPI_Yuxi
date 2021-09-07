import { Routes, RouterModule } from '@angular/router';
import { HelpComponent } from './Components/help/help.component';

const HelpsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.administration.helps.title',
      urls: [
        { title: 'route.breadcrumb.administration.helps.url', url: '/Helps' },
        { title: 'route.breadcrumb.administration.helps.url' }
      ]
    },
    component: HelpComponent
  },
];

export const HELPS_ROUTES = RouterModule.forChild(HelpsRoutes);
