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
import { ResetKeyService } from './Services/reset-key.service';
import { ResetKeyComponent } from './Components/reset-key/reset-key.component';
import { RESETKEY_ROUTES } from './resetKey.routing';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RESETKEY_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    ResetKeyComponent
  ],
  exports: [
    ResetKeyComponent
  ],
  providers: [
    ProfileService,
    ResetKeyService,
    StatusPipe,
    TranslatePipe
  ]
})
export class ResetKeyModule { }