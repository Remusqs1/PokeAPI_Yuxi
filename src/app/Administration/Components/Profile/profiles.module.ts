import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PROFILES_ROUTES } from './profiles.routing';
import { CommonsModule } from '../../../Commons/commons.module';
import { ProfileService } from './Services/profile.service';
import { SharedModule } from '../../../Shared/shared.module';
import { ProfileFormsService } from './Services/profile.forms.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { ProfileComponent } from './Components/Profile/profile.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PROFILES_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ],
  providers: [
    ProfileService,
    ProfileFormsService,
    StatusPipe,
    TranslatePipe
  ]
})

export class ProfilesModule { }
