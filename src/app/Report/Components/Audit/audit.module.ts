import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuditRoutingModule } from './audit-routing.module';
import { AuditComponent } from './Components/audit/audit.component';
import { AuditFormService } from './Services/audit.form.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { SharedModule } from '../../../Shared/shared.module';

@NgModule({
  declarations: [AuditComponent],
  imports: [
    CommonModule,
    AuditRoutingModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    FormsModule,
    SharedModule

  ],
  providers:[
    AuditFormService,
    TranslatePipe,
    StatusPipe
  ]
})
export class AuditModule { }
