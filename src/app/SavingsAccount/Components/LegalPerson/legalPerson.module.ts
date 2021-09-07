import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { LEGALPERSON_ROUTES } from './legalPerson.routing';
import { LegalPersonComponent } from './Components/legal-person/legal-person.component';
import { LegalPersonService } from './Services/legalPerson.service';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    LEGALPERSON_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    LegalPersonComponent
  ],
  exports: [
    LegalPersonComponent
  ],
  providers: [
    ProfileService,
    LegalPersonService,
    StatusPipe,
    TranslatePipe
  ]
})
export class LegalPersonModule { }
