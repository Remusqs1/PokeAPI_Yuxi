import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { OfferHistoryComponent } from './Components/OfferHistory/offerHistory.component';
import { OFFERHISTORY_ROUTES } from './offerHistory.routing';
import { OfferHistoryFormsService } from './Services/offerHistory.forms.service';
import { OfferHistoryService } from './Services/offerHistory.service';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    OFFERHISTORY_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    OfferHistoryComponent
  ],
  exports: [
    OfferHistoryComponent
  ],
  providers: [
    ProfileService,
    OfferHistoryFormsService,
    StatusPipe,
    OfferHistoryService,
    TranslatePipe
  ]
})
export class OfferHistoryModule { }
