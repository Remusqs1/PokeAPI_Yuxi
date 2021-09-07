import { Routes, RouterModule } from '@angular/router';
import { CampaignComponent } from './Components/Campaing/campaign.component';


const CampaignRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'route.breadcrumb.management.campaign.title',
      urls: [
        { title: 'route.breadcrumb.management.campaign.url', url: '/Campaign' },
        { title: 'route.breadcrumb.management.campaign.url' }
      ]
    },
    component: CampaignComponent
  },
];

export const CAMPAIGN_ROUTES = RouterModule.forChild(CampaignRoutes);