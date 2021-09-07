import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { environment } from '../../../../../../environments/environment';
import { Result } from '../../../../../Commons/Classes/result';

import { Role } from '../../MethodParameters/role';
import { GetRoleByFilterIn } from '../../MethodParameters/getRoleByFilterIn';
import { RoleService } from '../../Services/role.service';
import { RoleFormsService } from '../../Services/role.forms.service';
import { CreateRoleIn } from '../../MethodParameters/createRoleIn';
import { UpdateRoleIn } from '../../MethodParameters/updateRoleIn';
import { PermissionService } from '../../../Permission/Services/permission.service';
import { GetPermissionByRoleEditIn } from '../../../Permission/MethodParameters/getPermissionByRoleEditIn';
import { PermissionRoleEdit } from '../../../Permission/MethodParameters/permissionRoleEdit';
import { UpdateRolePermissionIn } from '../../MethodParameters/updateRolePermissionIn';
import { RolePermissionUpdate } from '../../MethodParameters/rolePermissionUpdate';
import { Router } from '@angular/router';
@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  createForm: FormGroup;
  editForm: FormGroup;
  filterForm: FormGroup;
  editRoleIn: UpdateRoleIn = new UpdateRoleIn();
  settings: any;

  listRoleByFilter: Array<Role>;
  totalRecords: number = 0;
  hasError = false;
  selectedAllActions = false;
  rl_rl_codeTmp: string;
  permissionRole: PermissionRoleEdit = new PermissionRoleEdit();

  createModalAceptText = 'role.createRole.modalAceptButton';
  createModalCloseText = 'role.createRole.modalCancelButton';
  createModalTitle = 'role.createRole.modalTitle';
  editModalTitle = 'role.editRole.modalTitle';
  editModalAceptText = 'role.editRole.modalAceptButton';
  editModalCloseText = 'role.editRole.modalCancelButton';

  constructor(private roleService: RoleService,
    private roleFormService: RoleFormsService,
    private translateService: TranslateService,
    private permissionProxy: PermissionService,
    private router: Router) { }

  ngOnInit() {

    this.filterForm = this.roleFormService.getFilterForm();
    this.createForm = this.roleFormService.getCreateForm();
    this.editForm = this.roleFormService.getEditForm();
    this.settings = this.roleFormService.getConfigDataTable();
    this.getRoleByFilter();

  }

  changePage($event: any) {
    this.getRoleByFilter($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getRoleByFilter(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  getRoleByFilter(pageNumber: number = 1, orderBy: string = 'usrID', orderDirection: string = 'ASC') {

    const roleFilter = new GetRoleByFilterIn();
    roleFilter.rl_name = this.filterForm.get('rl_name').value;
    roleFilter.rl_code = this.filterForm.get('rl_code').value;
    roleFilter.pageSize = environment.pageSize;
    roleFilter.pageNumber = pageNumber;
    roleFilter.orderBy = orderBy;
    roleFilter.orderDirection = orderDirection;
    this.roleService.getRoleByFilter(roleFilter).subscribe(response => {
      if (response.result === Result.Success) {
        this.totalRecords = response.totalRecords;
        this.listRoleByFilter = response.listRoleByFilter;
        // console.log('listRoleByFilter', this.listRoleByFilter);
        // this.smartTable.setPage(pageNumber);
      }else if (response.result == Result.InvalidSession) {
        this.invalidSession();
      }else if (response.result == Result.InvalidPermissionRole) {
        this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
      } else {
        this.messages.showMessages('role.getRole.messageError', 'ERROR');
      }
    });
  }

  openCreateRoleModal() {
    this.createModal.open();
  }

  createRole() {

    this.hasError = false;
    if (this.createForm.valid) {

      const createRoleIn = new CreateRoleIn();
      createRoleIn.rl_name = this.createForm.value.create_rl_name;

      this.roleService.createRole(createRoleIn).subscribe(response => {
        console.log('responseRole', response);
        if (response.result === Result.Success) {
          this.messages.showMessages('role.createRole.messageCreateSucces', 'SUCCESS');
          this.getRoleByFilter();
        }else if (response.result == Result.InvalidSession) {
          this.invalidSession();
        } else if (response.result === Result.UserExists) {
          this.messages.showMessages('role.createRole.messageRoleExists', 'ERROR');
        } else if (response.result === 12) {
          this.messages.showMessages('role.createRole.existingCode', 'ERROR');
        }else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        }
        else {
          this.messages.showMessages('role.createRole.messageError', 'ERROR');
        }
        this.createModal.closeModal();
      });
    } else {
      this.hasError = true;
    }

  }

  closeCreate() {
    this.hasError = false;
    this.createForm = this.roleFormService.getCreateForm();
  }

  editRole(event: any) {
    this.editRoleIn = Object.assign(new Role(), event.data);

    this.rl_rl_codeTmp = event.data.rl_code;
    this.editForm.controls.edit_rl_code.setValue(event.data.rl_code);
    this.editForm.controls.edit_rl_name.setValue(event.data.rl_name);
    this.editForm.controls.edit_rl_status.setValue(event.data.rl_status);

    let getProfileActionsIn: GetPermissionByRoleEditIn = new GetPermissionByRoleEditIn();
    getProfileActionsIn.role = event.data.rl_code;
    this.permissionProxy.getPermissionByRoleEdit(getProfileActionsIn).subscribe(response => {
      if (response.result === Result.Success) {
        this.permissionRole.listPermissions = response.listPermissions;
        console.log("Permisos del rol a editar ", response.listPermissions);
        this.editModal.open();
      } else if (response.result == Result.InvalidSession) {
        this.invalidSession();
      }else if (response.result == Result.InvalidPermissionRole) {
        this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
      }else {
        this.messages.showMessages('role.editRole.messageActionsNotFound', 'ERROR');
      }
    });

  }

  confirmEdit() {

    this.hasError = false;
    if (this.editForm.valid) {

      const editRoleIn = new UpdateRoleIn();

      editRoleIn.rl_code = this.rl_rl_codeTmp;
      editRoleIn.rl_name = this.editForm.value.edit_rl_name;
      editRoleIn.rl_status = this.editForm.value.edit_rl_status;

      this.roleService.updateRole(editRoleIn).subscribe(response => {
        if (response.result === Result.Success) {
          this.messages.showMessages('role.editRole.messageEditSucces', 'SUCCESS');
          console.log('Lista despues ', this.permissionRole.listPermissions);
          let updateRolePermission: UpdateRolePermissionIn = new UpdateRolePermissionIn();
          let listRolePermission:Array<RolePermissionUpdate> = new Array<RolePermissionUpdate>();
          let rolePermissionUpdate:RolePermissionUpdate;

          for (let index = 0; index < this.permissionRole.listPermissions.length; index++) {
              
              rolePermissionUpdate = new RolePermissionUpdate();
              rolePermissionUpdate.rl_code = this.rl_rl_codeTmp;
              rolePermissionUpdate.pm_code = this.permissionRole.listPermissions[index].pm_code;
              rolePermissionUpdate.rp_status = this.permissionRole.listPermissions[index].rp_status;
              listRolePermission.push(rolePermissionUpdate);

          }

          updateRolePermission.listRolePermission = listRolePermission;

          this.roleService.updateRolePermission(updateRolePermission).subscribe(resp => {
            if (resp.result === Result.Success) {
              this.getRoleByFilter();
            }else if (response.result == Result.InvalidSession) {
              this.invalidSession();
            }else if (response.result == Result.InvalidPermissionRole) {
              this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
            } else {
              this.messages.showMessages('Error al asignar permisos al rol', 'ERROR');
            }
          });

        }else if (response.result == Result.InvalidSession) {
          this.invalidSession();
        }else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        } else {
          this.messages.showMessages('role.editRole.messageError', 'ERROR');
        }
        this.editModal.closeModal();
      });
    } else {
      this.hasError = true;
    }
  }

  closeEdit() {
    this.hasError = false;
    this.editRoleIn = new UpdateRoleIn();
    this.editForm = this.roleFormService.getEditForm();
  }

  invalidSession() {
    this.messages.showMessages('Su sessión ha caducado, ingrese de nuevo al sistema', 'ERROR');
    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
    
  }

}
