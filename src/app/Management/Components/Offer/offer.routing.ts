import { Routes, RouterModule } from '@angular/router';
import { OfferComponent } from '../Offer/Components/Offer/offer.component';


const OfferRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.offer.title',
      urls: [
        { title: 'route.breadcrumb.management.offer.url', url: '/Offer' },
        { title: 'route.breadcrumb.management.offer.url' }
      ]
    },
    component: OfferComponent
  },
];

export const OFFER_ROUTES = RouterModule.forChild(OfferRoutes);