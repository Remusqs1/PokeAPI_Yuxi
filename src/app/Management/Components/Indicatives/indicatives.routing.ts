import { Routes, RouterModule } from '@angular/router';
import { IndicativesComponent } from './Components/indicatives.component';

const IndicativesRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.indivatives.title',
      urls: [
        { title: 'route.breadcrumb.management.home.url', url: '/Indicatives' },
        { title: 'route.breadcrumb.management.home.url' }
      ]
    },
    component: IndicativesComponent
  },
];

export const HOME_ROUTES = RouterModule.forChild(IndicativesRoutes);