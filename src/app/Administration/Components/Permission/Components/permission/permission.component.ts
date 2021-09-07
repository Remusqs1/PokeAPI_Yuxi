import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { environment } from '../../../../../../environments/environment';
import { Result } from '../../../../../Commons/Classes/result';

import { Permission } from '../../MethodParameters/permission';
import { GetPermissionByFilterIn } from '../../MethodParameters/getPermissionByFilterIn';
import { PermissionService } from '../../Services/permission.service';
import { PermissionFormsService } from '../../Services/permission.forms.service';
import { CreatePermissionIn } from '../../MethodParameters/createPermissionIn';
import { UpdatePermissionIn } from '../../MethodParameters/updatePermissionIn';
import { Router } from '@angular/router';
@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  filterForm: FormGroup;
  createForm: FormGroup;
  editForm: FormGroup;
  editPermissionIn: UpdatePermissionIn = new UpdatePermissionIn();
  settings: any;

  listPermissionByFilter: Array<Permission>;
  totalRecords: number = 0;
  hasError = false;
  selectedAllActions = false;
  pm_pm_codeTmp: string;

  createModalAceptText = 'permission.createPermission.modalAceptButton';
  createModalCloseText = 'permission.createPermission.modalCancelButton';
  createModalTitle = 'permission.createPermission.modalTitle';
  editModalTitle = 'permission.editPermission.modalTitle';
  editModalAceptText = 'permission.editPermission.modalAceptButton';
  editModalCloseText = 'permission.editPermission.modalCancelButton';

  constructor(private permissionService: PermissionService,
    private permissionFormService: PermissionFormsService,
    private translateService: TranslateService,
    private router: Router) { }

  ngOnInit() {

    this.filterForm = this.permissionFormService.getFilterForm();
    this.createForm = this.permissionFormService.getCreateForm();
    this.editForm = this.permissionFormService.getEditForm();
    this.settings = this.permissionFormService.getConfigDataTable();
    this.getPermissionByFilter();

  }

  changePage($event: any) {

    this.getPermissionByFilter($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getPermissionByFilter(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  getPermissionByFilter(pageNumber: number = 1, orderBy: string = 'pm_name', orderDirection: string = 'ASC') {

    const permissionFilter = new GetPermissionByFilterIn();
    // permissionFilter.pm_name = this.filterForm.get('pm_name').value;
    // permissionFilter.pm_code = this.filterForm.get('pm_code').value;
    permissionFilter.pageSize = environment.pageSize;
    permissionFilter.pageNumber = pageNumber;
    permissionFilter.orderBy = orderBy;
    permissionFilter.orderDirection = orderDirection;
    this.permissionService.getPermissionByFilter(permissionFilter).subscribe(response => {
      if (response.result === Result.Success) {
        this.totalRecords = response.totalRecords;
        this.listPermissionByFilter = response.listPermissions;
        // console.log('listPermissionByFilter',this.listPermissionByFilter);
        // this.smartTable.setPage(pageNumber);
      } else if (response.result == Result.InvalidSession) {
        this.invalidSession();
      } else if (response.result == Result.InvalidPermissionRole) {
        this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
      } else {
        this.messages.showMessages('permission.getPermission.messageError', 'ERROR');
      }
    });
  }

  openCreatePermissionModal() {
    this.createModal.open();
  }

  createPermission() {

    this.hasError = false;
    if (this.createForm.valid) {

      const createPermissionIn = new CreatePermissionIn();
      createPermissionIn.pm_name = this.createForm.value.create_pm_name;
      createPermissionIn.pm_description = this.createForm.value.create_pm_description;

      this.permissionService.createPermission(createPermissionIn).subscribe(response => {
        console.log('responsepermission', response);
        if (response.result === Result.Success) {
          this.messages.showMessages('permission.createPermission.messageCreateSucces', 'SUCCESS');
          this.getPermissionByFilter();
        } else if (response.result == Result.InvalidSession) {
          this.invalidSession();
        } else if (response.result === Result.UserExists) {
          this.messages.showMessages('permission.createPermission.messagePermissionExists', 'ERROR');
        } else if (response.result === 12) {
          this.messages.showMessages('permission.createPermission.existingCode', 'ERROR');
        } else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        }
        else {
          this.messages.showMessages('permission.createPermission.messageError', 'ERROR');
        }
        this.createModal.closeModal();
      });
    } else {
      this.hasError = true;
    }

  }

  closeCreate() {
    this.hasError = false;
    this.createForm = this.permissionFormService.getCreateForm();
  }

  editPermission(event: any) {
    this.editPermissionIn = Object.assign(new Permission(), event.data);

    this.pm_pm_codeTmp = event.data.pm_code;
    this.editForm.controls.edit_pm_code.setValue(event.data.pm_code);
    this.editForm.controls.edit_pm_name.setValue(event.data.pm_name);
    this.editForm.controls.edit_pm_description.setValue(event.data.pm_description);
    this.editForm.controls.edit_pm_status.setValue(event.data.pm_status);

    this.editModal.open();

  }

  confirmEdit() {

    this.hasError = false;
    if (this.editForm.valid) {

      const editPermissionIn = new UpdatePermissionIn();

      editPermissionIn.pm_code = this.pm_pm_codeTmp;
      editPermissionIn.pm_name = this.editForm.value.edit_pm_name;
      editPermissionIn.pm_description = this.editForm.value.edit_pm_description;
      editPermissionIn.pm_status = this.editForm.value.edit_pm_status;

      this.permissionService.updatePermission(editPermissionIn).subscribe(response => {
        if (response.result === Result.Success) {
          this.messages.showMessages('permission.editPermission.messageEditSucces', 'SUCCESS');
          this.getPermissionByFilter();
        } else if (response.result == Result.InvalidSession) {
          this.invalidSession();
        } else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        } else {
          this.messages.showMessages('permission.editPermission.messageError', 'ERROR');
        }
        this.editModal.closeModal();
      });
    } else {
      this.hasError = true;
    }
  }

  closeEdit() {
    this.hasError = false;
    this.editPermissionIn = new UpdatePermissionIn();
    this.editForm = this.permissionFormService.getEditForm();
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
