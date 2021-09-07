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
import { COMPANY_ROUTES } from './company.routing';
import { CompanyFormsService } from '../Company/Services/company.forms.service';
import { CompanyService } from '../Company/Services/company.service';
import { CompanyComponent } from '../Company/Components/company.component';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    COMPANY_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    CompanyComponent
  ],
  exports: [
    CompanyComponent
  ],
  providers: [
    StatusPipe,
    DateFormatPipe,
    TranslatePipe,
    CommonService,
    CompanyFormsService,
    CompanyService
  ]
})

export class CompanyModule { }
