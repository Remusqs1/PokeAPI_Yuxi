import { Routes, RouterModule } from '@angular/router';
import { OfferHistoryComponent } from './Components/OfferHistory/offerHistory.component';


const OfferHistoryRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.offerHistory.title',
      urls: [
        { title: 'route.breadcrumb.management.offerHistory.url', url: '/OfferHistory' },
        { title: 'route.breadcrumb.management.offerHistory.url' }
      ]
    },
    component: OfferHistoryComponent
  },
];

export const OFFERHISTORY_ROUTES = RouterModule.forChild(OfferHistoryRoutes);