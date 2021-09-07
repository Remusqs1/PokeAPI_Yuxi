import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreementComponent } from './Components/Agreement/agreement.component';
import { AGREEMENT_ROUTES } from './agreement.routing';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { AgreementFormsService } from './Services/agreement.forms.service';
import { AgreementService } from './Services/agreement.service';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    AGREEMENT_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    AgreementComponent
  ],
  exports: [
    AgreementComponent
  ],
  providers: [
    ProfileService,
    AgreementService,
    AgreementFormsService,
    StatusPipe,
    TranslatePipe
  ]
})
export class AgreementModule { }
