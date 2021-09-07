import { Routes, RouterModule } from '@angular/router';
import { MovementsComponent } from './Components/movements.component';

const CompanyRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Movimientos Cuenta',
      urls: [
        { title: 'route.breadcrumb.cuentas.movements.url', url: '/movements' },
        { title: 'route.breadcrumb.cuentas.movements.url' }
      ]
    },
    component: MovementsComponent
  },
];

export const MOVEMENTS_ROUTES = RouterModule.forChild(CompanyRoutes);
