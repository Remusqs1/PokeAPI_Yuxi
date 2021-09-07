import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { FormGroup } from '@angular/forms';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment';
import { Result } from '../../../../../Commons/Classes/result';

import { UserByFilter } from '../../MethodParameters/userByfilter';
import { GetUserByFilterIn } from '../../MethodParameters/getUserByFilterIn';
import { UserService } from '../../Services/user.service';
import { UserFormsService } from '../../Services/user.forms.service';
import { CreateMultipleUserIn, CreateUserIn, CreateUser } from '../../MethodParameters/createUserIn';
import { User } from '../../../../../Commons/Entities/user';
import { UpdateUserIn } from '../../MethodParameters/updateUserIn';
import { RoleService } from '../../../Role/Services/role.service';
import { GetRolesIn } from '../../../Role/MethodParameters/getRolesIn';
import { Role } from '../../../Role/MethodParameters/role';
import { GetUserIn } from '../../MethodParameters/getUserIn';
import { EmailUserValidationIn } from '../../MethodParameters/emailUserValidationIn';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { CommercialForce, GetCommercialForcesOut } from '../../MethodParameters/GetCommercialForcesOut';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('templateModal', { static: false }) templateModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  filterForm: FormGroup;
  createForm: FormGroup;
  editForm: FormGroup;
  editUserIn: UpdateUserIn = new UpdateUserIn();
  settings: any;

  listUserByFilter: Array<UserByFilter>;
  listRoles: Array<Role>
  totalRecords: number = 0;
  hasError = false;
  userExist: boolean = false;
  emailUserExist: boolean = false;
  selectedAllActions = false;
  usr_userNameTmp: string;
  commercialForces: CommercialForce[];
  fileHasError: boolean;
  documentTypes: any[] = [{ 'documentType': 'CC', 'id': '1' }, { 'documentType': 'NIT', 'id': '2' }];
  public img: string;
  public imgTosee: string;

  createModalAceptText = 'user.createUser.modalAceptButton';
  createModalCloseText = 'user.createUser.modalCancelButton';
  createModalTitle = 'Crear Usuario';
  editModalTitle = 'Editar Usuario';
  editModalAceptText = 'user.editUser.modalAceptButton';
  editModalCloseText = 'user.editUser.modalCancelButton';
  downloadTemplateAceptText = 'user.downloadTemplate.modalAceptButton';
  hide: boolean = true;

  constructor(private userService: UserService,
    private userFormService: UserFormsService,
    private translateService: TranslateService,
    private roleService: RoleService,
    private router: Router) { }

  ngOnInit() {

    this.createForm = this.userFormService.getCreateForm();
    this.editForm = this.userFormService.getEditForm();
    this.filterForm = this.userFormService.getFilterForm();
    this.settings = this.userFormService.getConfigDataTable();
    this.getRoleSystem();
    this.getUserByFilter();
    this.getCommercialForces();
    this.fileHasError = false;
  }

  getCommercialForces() {
    this.userService.getCommercialForces().subscribe(response => {
      this.commercialForces = response.CommercialForces;
    });
  }

  changePage($event: any) {
    this.getUserByFilter($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getUserByFilter(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  getRoleSystem() {
    const getRolesIn = new GetRolesIn()
    this.roleService.getRoles(getRolesIn).subscribe(response => {
      if (response.result === Result.Success) {
        // console.log('res  ', response);
        this.listRoles = response.listRol;
      } else if (response.result === Result.InvalidSession) {
        this.invalidSession();
      } else {
        this.messages.showMessages('user.getRoles.messageError', 'ERROR');
      }
    });
  }

  getUserByFilter(pageNumber: number = 1, orderBy: string = 'usrID', orderDirection: string = 'ASC') {

    const userFilter = new GetUserByFilterIn();
    userFilter.usr_userName = this.filterForm.get('usr_userName').value;
    userFilter.usr_numberDocument = this.filterForm.get('usr_numberDocument').value;
    userFilter.pageSize = environment.pageSize;
    userFilter.pageNumber = pageNumber;
    userFilter.orderBy = orderBy;
    userFilter.orderDirection = orderDirection;
    this.userService.getUserByFilter(userFilter).subscribe(response => {
      if (response.result === Result.Success) {
        this.totalRecords = response.totalRecords;
        this.listUserByFilter = response.listGetUserByFilter;
        //console.log('listUserByFilter', response.listGetUserByFilter);
        // this.smartTable.setPage(pageNumber);
      }
      else if (response.result == Result.InvalidSession) {
        this.invalidSession();
      }
      else if (response.result == Result.InvalidPermissionRole) {
        this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
      } else {
        this.messages.showMessages('user.getUser.messageError', 'ERROR');
      }
    });
  }

  openCreateUserModal() {
    this.createModal.open();
  }

  closeCreate() {
    this.hasError = false;
    this.createForm = this.userFormService.getCreateForm();
  }

  createUser() {

    this.hasError = false;
    console.log(this.createForm);

    if (this.createForm.valid && !this.emailUserExist && !this.userExist) {

      const createUserIn = new CreateUserIn();
      createUserIn.usr_userName = this.createForm.value.create_usr_userName;
      createUserIn.usr_fullName = this.createForm.value.create_usr_fullName;
      createUserIn.usr_password = this.createForm.value.create_usr_numberDocument;
      createUserIn.usr_documentType = this.createForm.value.create_usr_documentType;
      createUserIn.usr_numberDocument = this.createForm.value.create_usr_numberDocument;
      createUserIn.usr_email = this.createForm.value.create_usr_email;
      createUserIn.usr_role = this.createForm.value.create_usr_role;
      // createUserIn.usr_force = this.createForm.value.create_usr_force;

      this.userService.createUser(createUserIn).subscribe(response => {
        // console.log('responseUser', response);
        if (response.result === Result.Success) {
          this.messages.showMessages('user.createUser.messageCreateSucces', 'SUCCESS');
          this.getUserByFilter();
        }
        else if (response.result == Result.InvalidSession) {
          this.invalidSession();
        } else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        } else if (response.result === Result.UserExists) {
          this.messages.showMessages('user.createUser.messageUserExists', 'ERROR');
        } else if (response.result === 12) {
          this.messages.showMessages('user.createUser.existingCode', 'ERROR');
        }
        else {
          this.messages.showMessages('user.createUser.messageError', 'ERROR');
        }
        this.createModal.closeModal();
      });
    } else {
      this.hasError = true;
    }

  }

  downloadTemplate(download: boolean) {
    if (download) {
      window.open('./assets/templates/NewUsers.xlsx', '_blank');

      this.templateModal.closeModal();
    } else {

      this.templateModal.title = "Atención!";
      this.templateModal.open();
    }
  }

  closeTemplate() {
    this.templateModal.closeModal();
  }

  bulkInsertUsers(event) {
    this.messages.closeMessage();
    let file = event.target.files[0];
    var reader = new FileReader();
    if (String(file.name).slice(file.name.length - 3) != 'csv') {
      this.messages.showMessages('user.createMultipleUser.uploadFile.fileError', 'ERROR', true);
      return;
    }
    let createMultipleUser: CreateMultipleUserIn = new CreateMultipleUserIn();
    createMultipleUser.createMultipleUser = [];
    let repeatedUsers: CreateUserIn[];
    reader.readAsText(file);
    reader.onload = (evt: any) => {
      var data: string = reader.result as string;
      data = data.replace(/(\r)/gm, "");
      data = data.toLowerCase();
      var usersArray = data.split('\n')


      usersArray.forEach((value, index) => {
        if (index > 0 && index < usersArray.length - 1) {
          let user = new CreateUser();
          var userWithoutFormat = value.split(';');

          user.usr_userName = userWithoutFormat[0]; //Validate
          user.usr_password = userWithoutFormat[3];
          user.usr_fullName = userWithoutFormat[1]; //Validate
          user.usr_documentType = this.selectDocumentType(userWithoutFormat[2]); //(userWithoutFormat[2] === "C.C.") ? '1' : '2';
          user.usr_numberDocument = Number(userWithoutFormat[3]); //Validate
          user.usr_email = userWithoutFormat[4]; //Validate
          user.usr_role = userWithoutFormat[5]
          user.usr_force = this.selectCommercialForce(userWithoutFormat[6]) // (userWithoutFormat[6].toLowerCase() === "fuerza comercial propia") ? 1 : 2;

          createMultipleUser.createMultipleUser.push(user);


        }
      });

      const arrayIndexedByUserName = createMultipleUser.createMultipleUser.reduce((accum, element) => ({
        ...accum,
        [element.usr_userName]: element
      }), []);

      const arrayIndexedByEmail = createMultipleUser.createMultipleUser.reduce((accum, element) => ({
        ...accum,
        [element.usr_email]: element,
      }), []);

      const arrayIndexedByDocNumber = createMultipleUser.createMultipleUser.reduce((accum, element) => ({
        ...accum,
        [element.usr_numberDocument]: element,
      }), []);

      const totalUsers = createMultipleUser.createMultipleUser.length;
      if (totalUsers != Object.keys(arrayIndexedByUserName).length ||
        totalUsers != Object.keys(arrayIndexedByEmail).length ||
        totalUsers != Object.keys(arrayIndexedByDocNumber).length) {
        this.messages.showMessages('user.createMultipleUser.uploadFile.messageError', 'ERROR', true)
        return;
      }
      createMultipleUser.totalToSubmit = totalUsers;
      this.userService.createMultipleUser(createMultipleUser).subscribe((response) => {
        if (response.result == Result.Success) {
          this.messages.showMessages(`Se han creado: ${response.totalUsersCreated} usuarios de ${createMultipleUser.createMultipleUser.length}.`, 'SUCCESS', true);
          this.getUserByFilter();
        }
        else if (response.result == Result.NoRecords) {
          let str = `Se han creado: ${response.totalUsersCreated} usuarios.
No se han creado: ${response.usersNotCreatedByDocument.length} usuarios por error en el documento. 
No se han creado: ${response.usersNotCreatedByEmail.length} usuarios por error en el Email.
No se han creado: ${response.usersNotCreatedByRole.length} usuarios por error en el Rol.
No se han creado: ${response.usersNotCreatedByUserName.length} usuarios por error en el Nombre de usuario.`;
          this.messages.showMessages(str, 'WARNING', true);
          this.getUserByFilter();
          // this.messages.showMessages(`No se han creado: ${response.usersNotCreatedByDocument.length} usuarios por error en el documento.`, 'WARNING', true);
          // this.messages.showMessages(`No se han creado: ${response.usersNotCreatedByEmail.length} usuarios por error en el Email.`, 'WARNING', true);
          // this.messages.showMessages(`No se han creado: ${response.usersNotCreatedByRole.length} usuarios por error en el Rol.`, 'WARNING', true);
          // this.messages.showMessages(`No se han creado: ${response.usersNotCreatedByUserName.length} usuarios por error en el Nombre de usuario.`, 'WARNING', true);
        }
        else if (response.result == Result.Error) {
          this.messages.showMessages('user.createMultipleUser.uploadFile.messageError', 'ERROR');
        }
        else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        }

      });




    }
  }

  selectDocumentType(documentTypeString: string): string {
    try {
      var a = documentTypeString.split('.').join('').toLowerCase();

      let dtId = this.documentTypes.find(m => m.documentType.toLowerCase() == a).id;

      return dtId;
    } catch {
      throw this.messages.showMessages('Algun parametro de la columna Tipo de Documento no es valido.', 'ERROR')

    }

  }
  selectCommercialForce(commercialString: string): number {
    try {
      let cfId = this.commercialForces.find(m => m.SDescripcion.toLowerCase() == commercialString.toLowerCase()).SCodigo;
      return parseInt(cfId);
    } catch {
      throw this.messages.showMessages('Algun parametro de la columna Fuerza Comercial no es valido.', 'ERROR');

    }

  }

  editUser(event: any) {
    this.editUserIn = Object.assign(new User(), event.data);
    this.usr_userNameTmp = event.data.usr_userName;
    this.editForm.controls.edit_usr_userName.setValue(event.data.usr_userName);
    // this.editForm.controls.edit_usr_password.setValue(event.data.usr_password);
    this.editForm.controls.edit_usr_fullName.setValue(event.data.usr_fullName);
    this.editForm.controls.edit_usr_documentType.setValue(event.data.usr_documentType);
    this.editForm.controls.edit_usr_numberDocument.setValue(event.data.usr_numberDocument);
    this.editForm.controls.edit_usr_email.setValue(event.data.usr_email);
    // this.editForm.controls.edit_usr_companyID.setValue(event.data.usr_companyID);
    // this.editForm.controls.edit_usr_type.setValue(event.data.usr_type);
    this.editForm.controls.edit_usr_role.setValue(event.data.usr_role);
    this.imgTosee = atob(event.data.usr_avatar);
    this.editModal.open();

  }

  confirmEdit() {

    this.hasError = false;
    if (this.editForm.valid) {

      const editUserIn = new UpdateUserIn();
      editUserIn.usr_userName = this.usr_userNameTmp;
      // editUserIn.usr_password = this.editForm.value.edit_usr_password;
      editUserIn.usr_fullName = this.editForm.value.edit_usr_fullName;
      editUserIn.usr_documentType = this.editForm.value.edit_usr_documentType;
      editUserIn.usr_numberDocument = this.editForm.value.edit_usr_numberDocument;
      editUserIn.usr_email = this.editForm.value.edit_usr_email;
      // editUserIn.usr_companyID = this.editForm.value.edit_usr_companyID;
      // editUserIn.usr_type = this.editForm.value.edit_usr_type;
      editUserIn.usr_role = this.editForm.value.edit_usr_role;
      editUserIn.usr_avatar = this.img;
      this.userService.updateUser(editUserIn).subscribe(response => {
        if (response.result === Result.Success) {
          this.messages.showMessages('user.editUser.messageEditSucces', 'SUCCESS');
          this.getUserByFilter();
        } else if (response.result == Result.InvalidSession) {
          this.invalidSession();
        } else if (response.result == Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        } else {
          this.messages.showMessages('user.editUser.messageError', 'ERROR');
        }
        this.editModal.closeModal();
      });
    } else {
      this.hasError = true;
    }
  }

  closeEdit() {
    this.hasError = false;
    this.editUserIn = new UpdateUserIn();
    this.editForm = this.userFormService.getEditForm();
    this.imgTosee = '';
  }

  validateuserName() {

    this.hasError = false;
    const getUserIn = new GetUserIn();
    getUserIn.usr_userName = this.createForm.value.create_usr_userName;

    this.userService.getUser(getUserIn).subscribe(resp => {
      if (resp.result === Result.Success && resp.resultGetUser !== null) {
        this.userExist = true;
        this.hasError = true;
      } else if (resp.result == Result.InvalidSession) {
        this.invalidSession();
      } else {
        this.userExist = false;
      }
    });

  }

  validateUserEmail() {

    this.hasError = false;
    const emailUserValidationIn = new EmailUserValidationIn();
    emailUserValidationIn.email = this.createForm.value.create_usr_email;

    this.userService.emailUserValidation(emailUserValidationIn).subscribe(resp => {
      if (resp.result === Result.UserBlocked) {
        this.emailUserExist = true;
        this.hasError = true;
        setTimeout(() => {

        }, 3000);
      } else if (resp.result == Result.InvalidSession) {
        this.invalidSession();
      } else {
        this.emailUserExist = false;
      }
    });

  }
  handleFileInput(e) {
    const file = e.dataTrasfer ? e.dataTransfer.files[0] : e.target.files[0];
    const pattern = /image-*/;
    const raeder = new FileReader();
    raeder.onload = this._handledReaderLoaded.bind(this);
    raeder.readAsDataURL(file);
  }
  _handledReaderLoaded(e) {
    const reader = e.target;
    const img = btoa(reader.result);
    this.img = img;
    this.imgTosee = atob(this.img);
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