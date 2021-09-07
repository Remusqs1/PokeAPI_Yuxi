import { Routes, RouterModule } from '@angular/router';
import { PermissionComponent } from './Components/permission/permission.component';


const PermissionsRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.administration.permissions.title',
      urls: [
        { title: 'route.breadcrumb.administration.permissions.url', url: '/Permissions' },
        { title: 'route.breadcrumb.administration.permissions.url' }
      ]
    },
    component: PermissionComponent
  },
];

export const PERMISSIONS_ROUTES = RouterModule.forChild(PermissionsRoutes);
