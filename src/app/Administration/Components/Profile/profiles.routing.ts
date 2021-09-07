import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './Components/Profile/profile.component';


const ProfilesRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.administration.profiles.title',
      urls: [
        { title: 'route.breadcrumb.administration.profiles.url', url: '/Profiles' },
        { title: 'route.breadcrumb.administration.profiles.url' }
      ]
    },
    component: ProfileComponent
  },
];

export const PROFILES_ROUTES = RouterModule.forChild(ProfilesRoutes);
