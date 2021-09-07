import { Routes, RouterModule } from '@angular/router';
import { ResetKeyComponent } from './Components/reset-key/reset-key.component';


const ResetKeyRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Reiniciar clave',
      urls: [
        { title: 'route.breadcrumb.management.campaign.url', url: '/RESETKEY' },
        { title: 'route.breadcrumb.management.campaign.url' }
      ]
    },
    component: ResetKeyComponent
  },
];

// tslint:disable-next-line:eofline
export const RESETKEY_ROUTES = RouterModule.forChild(ResetKeyRoutes);