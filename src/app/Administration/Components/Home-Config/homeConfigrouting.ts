import { Routes, RouterModule } from '@angular/router';
import { HomeConfigComponent } from './Components/homeConfig.component';



const HomeConfigRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Configuración Home',
      urls: [
        { title: 'route.breadcrumb.administration.homeConfig.url', url: '/Home-config' },
        { title: 'route.breadcrumb.administration.homeconfig.url' }
      ]
    },
    component: HomeConfigComponent
  },
];

export const HOMECONFIG_ROUTES = RouterModule.forChild(HomeConfigRoutes);
