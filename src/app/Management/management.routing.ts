import { Routes, RouterModule } from '@angular/router';
import { FullComponent } from '../Shared/Components/Layouts/Full/full.component';
import { AuthGuard } from '../Shared/Services/auth.guard';

const ManagementRoutes: Routes = [
  {
    path: 'Agreement',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Agreement/agreement.module').then(module => module.AgreementModule)
  },
  {
    path: 'Campaign',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Campaign/campaign.module').then(module => module.CampaignModule)
  },
  {
    path: 'Parameters',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Parameters/parameters.module').then(module => module.ParametersModule)
  },
  {
    path: 'Offer',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Offer/offer.module').then(module => module.OfferModule)
  },
  {
    path: 'OfferHistory',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/OfferHistory/offerHistory.module').then(module => module.OfferHistoryModule)
  },
  {
    path: 'Associated',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Associated/associated.module').then(module => module.AssociatedModule)
  }
  ,
  {
    path: 'Home',
    canActivate: [AuthGuard],
    component: FullComponent,
    loadChildren: () => import('./Components/Home/home.module').then(module => module.HomeModule)
  }
];

export const MANAGEMENT_ROUTES = RouterModule.forChild(ManagementRoutes);
