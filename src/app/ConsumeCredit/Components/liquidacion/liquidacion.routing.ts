import { Routes, RouterModule } from '@angular/router';
import { LiquidacionComponent } from './Components/liquidacion.component';

const LiquidacionRoutes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.liquidacion.url', url: '/liquidacion' },
        { title: 'route.breadcrumb.consumeCredit.liquidacion.url' }
      ]
    },
    component: LiquidacionComponent
  },
];

export const LIQUIDACION_ROUTES = RouterModule.forChild(LiquidacionRoutes);
