import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { ProfileFormsService } from '../../../Administration/Components/Profile/Services/profile.forms.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { OFFER_ROUTES } from './offer.routing';
import { OfferComponent } from '../Offer/Components/Offer/offer.component';
import { OfferFormsService } from './Services/offer.forms.service';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    OFFER_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    OfferComponent
  ],
  exports: [
    OfferComponent
  ],
  providers: [
    ProfileService,
    OfferFormsService,
    StatusPipe,
    TranslatePipe
  ]
})
export class OfferModule { }
