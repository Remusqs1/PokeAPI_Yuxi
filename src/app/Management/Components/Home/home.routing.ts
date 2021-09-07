import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Home/home.component';


const HomeRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.home.title',
      urls: [
        { title: 'route.breadcrumb.management.home.url', url: '/Home' },
        { title: 'route.breadcrumb.management.home.url' }
      ]
    },
    component: HomeComponent
  },
];

export const HOME_ROUTES = RouterModule.forChild(HomeRoutes);