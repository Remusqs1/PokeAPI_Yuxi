import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CAMPAIGN_ROUTES } from './campaign.routing';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { ProfileFormsService } from '../../../Administration/Components/Profile/Services/profile.forms.service';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { CampaignFormsService } from './Services/campaign.forms.service';
import { CampaignComponent } from './Components/Campaing/campaign.component';
import { CampaignService } from './Services/campaign.service';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    CAMPAIGN_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule,
    CurrencyMaskModule
  ],
  declarations: [
    CampaignComponent
  ],
  exports: [
    CampaignComponent
  ],
  providers: [
    ProfileService,
    CampaignFormsService,
    CampaignService,
    StatusPipe,
    TranslatePipe
  ]
})
export class CampaignModule { }
