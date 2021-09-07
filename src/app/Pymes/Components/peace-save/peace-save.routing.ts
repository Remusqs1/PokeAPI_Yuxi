import { Routes, RouterModule } from '@angular/router';
import { PeaceSaveComponent }  from './Components/peace-save.component';

const SummariARoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Paz y salvo',
      urls: [
        { title: 'route.breadcrumb.pymes.peace-save.url', url: '/peace-save' },
        { title: 'route.breadcrumb.pymes.peace-save.url' }
      ]
    },
    component: PeaceSaveComponent
  },
];

export const PEACESAVE_ROUTES = RouterModule.forChild(SummariARoutes);
