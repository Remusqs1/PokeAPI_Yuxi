import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { BlankComponent } from '../Shared/Components/Layouts/Blank/blank.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const PymesRoutes: Routes = [
    {
        path: '',
        component: BlankComponent,
        loadChildren: () => import('./Components/balances/balances.module').then(module => module.BalancesModule)
    },
    {
        path: 'balances',
        component: FullComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./Components/balances/balances.module').then(module => module.BalancesModule)
    },
    {
        path: 'peace-save',
        component: FullComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./Components/peace-save/peace-save.module').then(module => module.PeaceSaveModule)
    },
];

export const PYMES_ROUTES = RouterModule.forChild(PymesRoutes);