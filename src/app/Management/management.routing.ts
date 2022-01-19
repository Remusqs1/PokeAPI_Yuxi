import { Routes, RouterModule } from '@angular/router';

const ManagementRoutes: Routes = [
  {
    path: 'Home',
    loadChildren: () => import('./Components/Home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'Details',
    loadChildren: () => import('./Components/Details/details.module').then(module => module.DetailsModule)
  }
];

export const MANAGEMENT_ROUTES = RouterModule.forChild(ManagementRoutes);
