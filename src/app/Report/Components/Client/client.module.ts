import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './Components/client/client.component';
import { CLIENT_ROUTING } from './client.routing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TranslatePipe } from '@ngx-translate/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { SharedModule } from '../../../Shared/shared.module';
import { ClientFormService } from './Services/client.form.service'

@NgModule({
  declarations: [ClientComponent],
  imports: [
    CommonModule,
    CLIENT_ROUTING,
    ReactiveFormsModule,
    FormsModule,
    Ng2SmartTableModule,
    CommonsModule,
    SharedModule
  ],
  providers:[
    ClientFormService,
    StatusPipe
  ]
})
export class ClientModule { }
