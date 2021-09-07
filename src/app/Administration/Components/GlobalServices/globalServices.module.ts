import { NgModule } from '@angular/core';
import { SharedModule } from '../../../Shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { DateFormatPipe } from '../../../Shared/Pipes/dateFormatPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { CommonService } from '../../../Commons/Services/common.service';
import { GLOBALSERVICES_ROUTES } from './globalServices.routing';
import { GlobalServicesComponent } from './Components/globalServices.component';
import { GlobalServicesFormsService } from './Services/globalServices.form.service';
import { ServiceService } from './Services/services.service';
import { CurrencyFormatPipe } from '../../../Shared/Pipes/currencyFormatPipe';



@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    NgbModule,
    FormsModule,
    GLOBALSERVICES_ROUTES,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    GlobalServicesComponent,    
  ],
  exports: [
    GlobalServicesComponent,    
  ],
  providers: [
    StatusPipe,
    DateFormatPipe,
    ServiceService,
    CurrencyFormatPipe,
    TranslatePipe,
    GlobalServicesFormsService,
    CommonService
  ]
})

export class GlobalServicesModule { }