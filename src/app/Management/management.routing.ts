import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const ManagementRoutes: Routes = [
  {
    path: 'Home',
    // canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Home/home.module').then(module => module.HomeModule)
  },
  {
    path: 'Indicatives',
    // canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Indicatives/indicatives.module').then(module => module.IndicativeModule)
  },
  {
    path: 'DevCells',
    // canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/DevCells/devCells.module').then(module => module.DevCellsModule)
  }
];

export const MANAGEMENT_ROUTES = RouterModule.forChild(ManagementRoutes);
