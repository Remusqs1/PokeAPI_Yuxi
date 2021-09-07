import { Routes, RouterModule } from '@angular/router';
import { RoleComponent } from './Components/role/role.component';



const RolesRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.administration.roles.title',
      urls: [
        { title: 'route.breadcrumb.administration.roles.url', url: '/Roles' },
        { title: 'route.breadcrumb.administration.roles.url' }
      ]
    },
    component: RoleComponent
  },
];

export const ROLES_ROUTES = RouterModule.forChild(RolesRoutes);
