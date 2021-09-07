import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociatedComponent } from './Components/Associated/associated.component';
import { ASSOCIATED_ROUTES } from './associated.routing';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { AssociatedFormsService } from './Services/associated.forms.service';
import { AssociatedService } from './Services/associated.service';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ASSOCIATED_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    AssociatedComponent
  ],
  exports: [
    AssociatedComponent
  ],
  providers: [
    ProfileService,
    AssociatedService,
    AssociatedFormsService,
    StatusPipe,
    TranslatePipe
  ]
})
export class AssociatedModule { }
