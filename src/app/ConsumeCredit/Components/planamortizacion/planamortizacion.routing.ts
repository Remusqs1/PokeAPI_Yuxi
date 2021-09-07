import { Routes, RouterModule } from '@angular/router';
import { PlanamortizacionComponent } from './Components/planamortizacion.component';

const PlanamortizacionRoutes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.planamortizacion.url', url: '/planamortizacion' },
        { title: 'route.breadcrumb.consumeCredit.planamortizacion.url' }
      ]
    },
    component: PlanamortizacionComponent
  },
];

export const PLANAMORTIZACION_ROUTES = RouterModule.forChild(PlanamortizacionRoutes);
