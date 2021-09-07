import { Routes, RouterModule } from '@angular/router';
import { LegalPersonComponent } from './Components/legal-person/legal-person.component';


const LegalPersonRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Persona jurídica',
      urls: [
        { title: 'route.breadcrumb.management.campaign.url', url: '/LegalPerson' },
        { title: 'route.breadcrumb.management.campaign.url' }
      ]
    },
    component: LegalPersonComponent
  },
];

// tslint:disable-next-line:eofline
export const LEGALPERSON_ROUTES = RouterModule.forChild(LegalPersonRoutes);