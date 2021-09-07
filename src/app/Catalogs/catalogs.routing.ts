import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { BlankComponent } from '../Shared/Components/Layouts/Blank/blank.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const AccountsRoutes: Routes = [
    {
        path: '',
        component: BlankComponent,
        loadChildren: () => import('./Components/catalogsType.module').then(module => module.CatalogsTypeModule)
    },
    {
        path: 'Catalogs',
        component: FullComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./Components/catalogsType.module').then(module => module.CatalogsTypeModule)
    },
];

export const CATALOGS_ROUTES = RouterModule.forChild(AccountsRoutes);