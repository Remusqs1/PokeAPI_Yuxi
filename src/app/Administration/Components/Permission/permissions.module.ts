import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { PERMISSIONS_ROUTES } from './permissions.routing';
import { CommonsModule } from '../../../Commons/commons.module';
import { PermissionService } from './Services/permission.service';
import { PermissionComponent } from './Components/permission/permission.component';
import { SharedModule } from '../../../Shared/shared.module';
import { PermissionFormsService } from './Services/permission.forms.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';




@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    PERMISSIONS_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    PermissionComponent
  ],
  exports: [
    PermissionComponent
  ],
  providers: [
    PermissionService,
    PermissionFormsService,
    StatusPipe,
    TranslatePipe
  ]
})

export class PermissionsModule { }
