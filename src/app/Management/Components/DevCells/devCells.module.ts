import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_ROUTES } from './devCells.routing';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { ManagementService } from '../../Services/management.service';
import { DevCellsComponent } from './Components/devcells.component';
import { DevCellFormsService } from './Services/devcells.forms.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HOME_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    DevCellsComponent
  ],
  exports: [
    DevCellsComponent
  ],
  providers: [
    DevCellFormsService,
    StatusPipe,
    TranslatePipe,
    ManagementService
  ]
})
export class DevCellsModule { }
