import { Routes, RouterModule } from '@angular/router';
import { ListCasesComponent } from './ListCases/listCases.component';

const ListCasesRoutes: Routes = [
    {
        path: '',
        data: {
            title: 'Lista de casos',
            urls: [
                { title: 'route.breadcrumb.management.campaign.url', url: '/ListCases' },
                { title: 'route.breadcrumb.management.campaign.url' }
            ]
        },
        component: ListCasesComponent
    },
]


export const LISTCASES_ROUTES = RouterModule.forChild(ListCasesRoutes);