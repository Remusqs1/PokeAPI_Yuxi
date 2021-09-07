import { Routes, RouterModule } from '@angular/router';
import { LoadDocumentComponent } from './Components/loaddocument.component';

const LoadDocumentRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Consultar Documentos',
      urls: [
        { title: 'route.breadcrumb.documentmanager.loaddocument.url', url: '/loadDocuments' },
        { title: 'route.breadcrumb.documentmanager.loaddocument.url' }
        
      ]
    },
    component: LoadDocumentComponent
  },
];

export const LOADDOCUMENTS_ROUTES = RouterModule.forChild(LoadDocumentRoutes);
