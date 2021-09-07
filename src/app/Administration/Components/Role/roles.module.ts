import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ROLES_ROUTES } from './roles.routing';
import { CommonsModule } from '../../../Commons/commons.module';
import { RoleService } from './Services/role.service';
import { SharedModule } from '../../../Shared/shared.module';
import { RoleFormsService } from './Services/role.forms.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { RoleComponent } from './Components/role/role.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    ROLES_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    RoleComponent
  ],
  exports: [
    RoleComponent
  ],
  providers: [
    RoleService,
    RoleFormsService,
    StatusPipe,
    TranslatePipe
  ]
})

export class RolesModule { }
