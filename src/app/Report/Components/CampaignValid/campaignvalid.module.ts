import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignValidComponent } from './Components/campaignValid/campaignValid.component';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { SharedModule } from '../../../Shared/shared.module';
import { CampaignFormService } from './Services/campaign.form.service';
import { VALIDATION_ROUTING } from './campaignvalid.routing'
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CampaignValidComponent],
  imports: [
    CommonModule,
    SharedModule,
    VALIDATION_ROUTING,
    ReactiveFormsModule,
    FormsModule
  ],
  providers:[
    CampaignFormService,
    TranslatePipe,
    StatusPipe
  ]
})
export class CampaignValidModule { }
