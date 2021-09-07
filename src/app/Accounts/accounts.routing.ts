import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { BlankComponent } from '../Shared/Components/Layouts/Blank/blank.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const AccountsRoutes: Routes = [
    {
        path: '',
        component: BlankComponent,
        loadChildren: () => import('./Components/movements/movements.module').then(module => module.MovementsModule)
    },
    {
        path: 'movements',
        component: FullComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./Components/movements/movements.module').then(module => module.MovementsModule)
    },
    {
        path: 'summary-acount',
        component: FullComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./Components/summary-account/summaryAcount.module').then(module => module.SummayAcountModule)
    },
];

export const ACCOUNTS_ROUTES = RouterModule.forChild(AccountsRoutes);