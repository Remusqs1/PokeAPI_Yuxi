import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './Components/user/user.component';


const UsersRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.administration.users.title',
      urls: [
        { title: 'route.breadcrumb.administration.users.url', url: '/Users' },
        { title: 'route.breadcrumb.administration.users.url' }
      ]
    },
    component: UserComponent
  },
];

export const USERS_ROUTES = RouterModule.forChild(UsersRoutes);
