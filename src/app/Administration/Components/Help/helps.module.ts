import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HELPS_ROUTES } from './helps.routing';
import { CommonsModule } from '../../../Commons/commons.module';
import { HelpService } from './Services/help.service';
import { HelpComponent } from './Components/help/help.component';
import { SharedModule } from '../../../Shared/shared.module';
import { HelpFormsService } from './Services/help.forms.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';




@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HELPS_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    HelpComponent
  ],
  exports: [
    HelpComponent
  ],
  providers: [
    HelpService,
    HelpFormsService,
    StatusPipe,
    TranslatePipe
  ]
})

export class HelpsModule { }
