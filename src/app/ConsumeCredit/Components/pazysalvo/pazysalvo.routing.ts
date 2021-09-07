import { Routes, RouterModule } from '@angular/router';
import {PazysalvoComponent } from './Components/pazysalvo.component';

const PazysalvoRoutes: Routes = [
  {
    path: '',
    data: {
      title: '',
      urls: [
        { title: 'route.breadcrumb.consumeCredit.pazysalvo.url', url: '/pazysalvo' },
        { title: 'route.breadcrumb.consumeCredit.pazysalvo.url' }
      ]
    },
    component: PazysalvoComponent
  },
];

export const PAZYSALVO_ROUTES = RouterModule.forChild(PazysalvoRoutes);
