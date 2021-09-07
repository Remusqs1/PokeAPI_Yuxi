import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '@ngx-translate/core';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { LINKINGACCOUNTS_ROUTES } from './linkingAccounts.routing';
import { LinkingAccountsComponent } from './Components/LinkingAccounts/linking-accounts.component';
import { LinkingAccountsService } from './Services/linking-accounts.service';
import { LinkingAccountsFormService } from './Services/linkingAccount.form.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    LINKINGACCOUNTS_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule,
  ],
  declarations: [LinkingAccountsComponent],
  exports: [LinkingAccountsComponent],
  providers: [
    ProfileService,
    LinkingAccountsService,
    LinkingAccountsFormService,
    StatusPipe,
    TranslatePipe,
  ],
})
export class LinkingAccountsModule {}
