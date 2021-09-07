import { NgModule } from '@angular/core';
import { SharedModule } from '../../../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonService } from '../../../Commons/Services/common.service';
import { DateFormatPipe } from '../../../Shared/Pipes/dateFormatPipe';
import { BALANCES_ROUTES } from './balances.routing';
import { BalancesComponent } from './Components/balances.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    BALANCES_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    BalancesComponent
  ],
  exports: [
    BalancesComponent
  ],
  providers: [
    StatusPipe,
    DateFormatPipe,
    TranslatePipe,
    CommonService,
   
  ]
})

export class BalancesModule { }
