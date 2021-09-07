import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HOMECONFIG_ROUTES } from './homeConfigrouting';
import { CommonsModule } from '../../../Commons/commons.module';
import { SharedModule } from '../../../Shared/shared.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { HomeConfigComponent } from './Components/homeConfig.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HOMECONFIG_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    HomeConfigComponent
  ],
  exports: [
    HomeConfigComponent
  ],
  providers: [

    StatusPipe,
    TranslatePipe
  ]
})

export class HomeConfigModule { }
