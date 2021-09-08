import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const ManagementRoutes: Routes = [
  {
    path: 'Home',
    // canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Home/home.module').then(module => module.HomeModule)
  }
];

export const MANAGEMENT_ROUTES = RouterModule.forChild(ManagementRoutes);
