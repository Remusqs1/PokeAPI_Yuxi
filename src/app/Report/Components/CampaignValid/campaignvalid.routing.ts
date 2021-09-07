import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignValidComponent } from './Components/campaignValid/campaignValid.component';


const routes: Routes = [
    {
        path: '',
        data: {
            title: 'route.breadcrumb.report.campaign.title',
            urls: [
                { title: 'route.breadcrumb.report.campaign.url', url: '/Report' },
                { title: 'route.breadcrumb.report.campaign.url' }
            ]
        },
        component: CampaignValidComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VALIDATION_ROUTING { }
