import { Routes, RouterModule } from '@angular/router';
import { CatalogsComponent } from './catalogs.component';

const CatalogsTypeRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin Catalogos',
      urls: [
        { title: 'route.breadcrumb.tipoCuentas.url', url: '/Catalogs' },
        { title: 'route.breadcrumb.tipoCuentas.url' }
      ]
    },
    component: CatalogsComponent
  },
];

export const CATALOGSTYPE_ROUTES = RouterModule.forChild(CatalogsTypeRoutes);
