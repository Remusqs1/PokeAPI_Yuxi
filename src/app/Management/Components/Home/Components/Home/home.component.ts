import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { TranslateService } from '@ngx-translate/core';
import { HomeFormsService } from '../../Services/home.forms.service';
import { HomeService } from '../../Services/home.service';
import { RoleService } from '../../../../../Administration/Components/Role/Services/role.service';
import { Router } from '@angular/router';
import { HomeConfigService } from '../../../../../Administration/Components/Home-Config/Services/homeConfig.service';
import { GetHomeConfigByUserIdIn } from '../../../../../Administration/Components/Home-Config/MethodParameters/getHomeConfigByUserIdIn';
import { Result } from '../../../../../Commons/Classes/result';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeConfigService]
})
export class HomeComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  createModalAceptText = 'home.createHome.modalAceptButton';
  createModalCloseText = 'home.createHome.modalCancelButton';
  createModalTitle = 'home.createHome.modalTitle';
  editModalTitle = 'home.editHome.modalTitle';
  editModalAceptText = 'home.editHome.modalAceptButton';
  editModalCloseText = 'home.editHome.modalCancelButton';

  settings: any;
  hasError = false;
  selectedAllActions = false;
  public input: GetHomeConfigByUserIdIn;
  public listHomeConfig: Array<any> = [];
  userLoged: any = {};
  constructor(private homeFormsService: HomeFormsService,
    private translateService: TranslateService,
    private proxyRoleService: RoleService,
    private HomeService: HomeService,
    private homeConfigService: HomeConfigService,
    private router: Router) {
    this.input = new GetHomeConfigByUserIdIn();
  }

  ngOnInit() {
    setTimeout(() => {
      this.getHomeConfig();
    }, 1000);

  }
  getHomeConfig() {
    const userLoged = JSON.parse(localStorage.getItem('user_info'));
    this.input.UserId = userLoged.usrID;
    this.homeConfigService.getHomeConfig('GetHomeConfigByUserId', this.input).subscribe(
      response => {
        switch (response.result) {
          case (Result.Success):
            const result = response.listHoemConfig;
            const listHomeconfigAux: any[] = [];
            result.forEach(item => {
              item.Icon = atob(item.Icon);
              listHomeconfigAux.push(item);
              this.listHomeConfig = listHomeconfigAux;
              this.listHomeConfig.sort((a, b) => a.OrderOption - b.OrderOption);
            });
            break;
          case (Result.InvalidSession):
            // this.invalidSession();
            break;
          case (Result.Error):
            console.log(response);
        }
      }
    );
  }
  // invalidSession() {
  //   this.messages.showMessages(
  //     'Su sessión ha caducado, ingrese de nuevo al sistema',
  //     'ERROR'
  //   );
  //   localStorage.removeItem('sesId_adm');
  //   localStorage.removeItem('user_adm');
  //   localStorage.removeItem('profile');
  //   setTimeout(() => {
  //     this.router.navigate(['/']);
  //   }, 5000);
  // }

}
