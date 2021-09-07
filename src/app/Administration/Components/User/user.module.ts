import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { USERS_ROUTES } from './users.routing';
import { CommonsModule } from '../../../Commons/commons.module';
import { UserService } from './Services/user.service';
import { SharedModule } from '../../../Shared/shared.module';
import { UserFormsService } from './Services/user.forms.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { UserComponent } from './Components/user/user.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    USERS_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    UserComponent
  ],
  exports: [
    UserComponent
  ],
  providers: [
    UserService,
    UserFormsService,
    StatusPipe,
    TranslatePipe
  ]
})

export class UsersModule { }
