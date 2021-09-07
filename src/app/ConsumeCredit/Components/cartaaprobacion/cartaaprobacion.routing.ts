import { Routes, RouterModule } from '@angular/router';
import { CartaaprobacionComponent } from './Components/cartaaprobacion.component';

const CartaaprobacionRoutes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.certificadoaldia.url', url: '/cartaaprobacion' },
        { title: 'route.breadcrumb.consumeCredit.certificadoaldia.url' }
      ]
    },
    component: CartaaprobacionComponent
  },
];

export const CARTAAPROBACION_ROUTES = RouterModule.forChild(CartaaprobacionRoutes);
