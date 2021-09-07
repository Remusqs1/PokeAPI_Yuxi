import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { AuthGuard } from '../Shared/Services/auth.guard';
// import { Observable } from 'rxjs';


const CasesRoutes: Routes = [
    {
        path: 'ListCases',
        canActivate: [AuthGuard],
        component: FullComponent,
        loadChildren: () => import('./Components/Adviser/Components/listCases.module').then(module => module.ListCasesModule)
    }
]


export const CASES_ROUTES = RouterModule.forChild(CasesRoutes);
