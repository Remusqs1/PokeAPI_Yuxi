import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const ConsumeCreditRoutes: Routes = [
    {
        path: 'extracts',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/extracts/extracts.module').then(module => module.ExtractsModule)
    },

    {
        path: 'liquidacion',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/liquidacion/liquidacion.module').then(module => module.LiquidacionModule)
    },

    {
        path: 'abonoacapital',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/abonoacapital/abonoacapital.module').then(module => module.AbonoacapitalModule)
    },

    {
        path: 'pazysalvo',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/pazysalvo/pazysalvo.module').then(module => module.PazysalvoModule)
    },

    {
        path: 'certificadoaldia',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/certificadoaldia/certificadoaldia.module').then(module => module.CertificadoaldiaModule)
    },

    {
        path: 'cartaaprobacion',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/cartaaprobacion/cartaaprobacion.module').then(module => module.CartaaprobacionModule)
    },

    {
        path: 'planamortizacion',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/planamortizacion/planamortizacion.module').then(module => module.PlanamortizacionModule)
    },
];

export const CONSUMECREDIT_ROUTES = RouterModule.forChild(ConsumeCreditRoutes);