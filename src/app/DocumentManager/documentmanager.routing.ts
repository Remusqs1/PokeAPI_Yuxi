import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { BlankComponent } from '../Shared/Components/Layouts/Blank/blank.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const DocumentalManagerrRoutes: Routes = [
    // {
    //     path: '',
    //     component: BlankComponent,
    //     loadChildren: () => import('./Components/loadDocuments/loaddocuments.module').then(module => module.LoadDocumentModule)
    // },
    {
        path: 'loadDocuments',
        component: FullComponent,
        canActivate: [AuthGuard],
        loadChildren: () => import('./Components/loadDocuments/loaddocuments.module').then(module => module.LoadDocumentModule)
    }
];

export const DOCUMENTMANAGER_ROUTES = RouterModule.forChild(DocumentalManagerrRoutes);