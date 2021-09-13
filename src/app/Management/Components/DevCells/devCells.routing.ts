import { Routes, RouterModule } from '@angular/router';
import { DevCellsComponent } from './Components/devcells.component';

const DevCellsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.devCells.title',
      urls: [
        { title: 'route.breadcrumb.management.home.url', url: '/DevCells' },
        { title: 'route.breadcrumb.management.home.url' }
      ]
    },
    component: DevCellsComponent
  },
];

export const HOME_ROUTES = RouterModule.forChild(DevCellsRoutes);