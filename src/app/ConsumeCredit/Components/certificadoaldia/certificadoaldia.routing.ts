import { Routes, RouterModule } from '@angular/router';
import { CertificadoaldiaComponent } from './Components/certificadoaldia.component';

const CertificadoaldiaRoutes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.certificadoaldia.url', url: '/certificadoaldia' },
        { title: 'route.breadcrumb.consumeCredit.certificadoaldia.url' }
      ]
    },
    component: CertificadoaldiaComponent
  },
];

export const CERTIFICADOALDIA_ROUTES = RouterModule.forChild(CertificadoaldiaRoutes);
