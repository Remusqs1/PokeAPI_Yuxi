import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileFormsService } from '../../Services/profile.forms.service';
import { Result } from '../../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { GetUserByFilterIn } from '../../MethodParameters/getUserByFilterIn';
import { environment } from '../../../../../../environments/environment';
import { ProfileService } from '../../Services/profile.service';
import { Profile } from '../../../../../Commons/Entities/profile';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { ActionByProfile } from '../../../../../Commons/Entities/actionByProfile';
import { TranslateService } from '@ngx-translate/core';
import { UserResult } from '../../MethodParameters/userResult';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  filterForm: FormGroup;
  createForm: FormGroup;
  editForm: FormGroup;
  editProfileIn: Profile = new Profile();
  // profilesList: Array<Profile>;
  usersList: Array<UserResult>;
  actionsByProfile: Array<ActionByProfile>;
  labelNoRecords: string;
  totalRecords = 0;
  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };

  createModalAceptText = 'profile.createProfile.modalAceptButton';
  createModalCloseText = 'profile.createProfile.modalCancelButton';
  createModalTitle = 'profile.createProfile.modalTitle';
  editModalTitle = 'profile.editProfile.modalTitle';
  editModalAceptText = 'profile.editProfile.modalAceptButton';
  editModalCloseText = 'profile.editProfile.modalCancelButton';

  settings: any;

  hasError = false;
  selectedAllActions = false;

  constructor(private profileFormsService: ProfileFormsService,
    private translateService: TranslateService,
    private profileService: ProfileService) { }

  ngOnInit() {
    this.createForm = this.profileFormsService.getCreateForm();
    this.filterForm = this.profileFormsService.getFilterForm();
    this.editForm = this.profileFormsService.getEditForm();
    this.settings = this.profileFormsService.getConfigDataTable();
    this.getUserByFilter();
  }

  changePage($event: any) {
    this.getUserByFilter($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getUserByFilter(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  getUserByFilter(pageNumber: number = 1, orderBy: string = 'usrID', orderDirection: string = 'ASC') {

    const profileFilter = new GetUserByFilterIn();
    profileFilter.usr_userName = this.filterForm.get('usr_userName').value;
    profileFilter.rl_name = this.filterForm.get('rl_name').value;
    profileFilter.pageSize = environment.pageSize;
    profileFilter.pageNumber = pageNumber;
    profileFilter.orderBy = orderBy;
    profileFilter.orderDirection = orderDirection;
    this.profileService.getUserByFilter(profileFilter).subscribe(response => {
      if (response.result === Result.Success) {
        this.totalRecords = response.totalRecords;
        this.usersList = response.listGetUserByFilter;
        // console.log('profileList',this.usersList);
        // this.smartTable.setPage(pageNumber);
      } else {
        this.messages.showMessages('profile.getProfile.messageError', 'ERROR');
      }
    });
  }

  openCreateProfileModal() {
    this.createModal.open();
  }

  closeCreate() {
    this.hasError = false;
    this.createForm = this.profileFormsService.getCreateForm();
  }

  // createProfile() {
  //   this.hasError = false;
  //   if (this.createForm.valid) {
  //     const createProfileIn = new CreateProfileIn();
  //     const createProfileModal = new Profile();
  //     createProfileModal.pro_name = this.createForm.value.create_pro_name;
  //     createProfileModal.pro_status = this.createForm.value.create_pro_status;
  //     createProfileModal.pro_id_homologacion = this.createForm.value.create_pro_id_homologacion;
  //     createProfileModal.pro_id_homologacion_cf = this.createForm.value.create_pro_id_homologacion_cf;
  //     createProfileModal.pro_portal = this.createForm.value.create_pro_portal;
  //     createProfileIn.profile = createProfileModal;

  //     console.log('createProfileIn',createProfileIn);
  //     this.profileService.createProfile(createProfileIn).subscribe(response => {
  //       console.log('responseProfile',response);
  //       if (response.result === Result.Success) {
  //         this.messages.showMessages('profile.createProfile.messageCreateSucces', 'SUCCESS');
  //         this.getUserByFilter();
  //       } else if (response.result === Result.ProfileExists) {
  //         this.messages.showMessages('profile.createProfile.messageProfileExists', 'ERROR');
  //       } else if (response.result === 12){
  //         this.messages.showMessages('profile.createProfile.existingCode', 'ERROR');
  //       }        
  //       else {
  //         this.messages.showMessages('profile.createProfile.messageError', 'ERROR');
  //       }
  //       this.createModal.closeModal();
  //     });
  //   } else {
  //     this.hasError = true;
  //   }

  // }

  // editProfile(event: any) {
  //   this.editProfileIn = Object.assign(new Profile(), event.data);
  //   const profileActionsIn = new GetProfileActionsIn();
  //   this.editForm.controls.edit_pro_name.setValue(event.data.pro_name);
  //   this.editForm.controls.edit_pro_status.setValue(event.data.pro_status);
  //   this.editForm.controls.edit_pro_id_homologacion.setValue(event.data.pro_id_homologacion);
  //   this.editForm.controls.edit_pro_id_homologacion_cf.setValue(event.data.pro_id_homologacion_cf);
  //   this.editForm.controls.edit_pro_portal.setValue(event.data.pro_portal);
  //   profileActionsIn.profileId = this.editProfileIn.proID;
  //   profileActionsIn.act_portal = this.editProfileIn.pro_portal;
  //   this.profileService.getProfileActions(profileActionsIn).subscribe(response => {
  //     if (response.result === Result.Success) {
  //       this.actionsByProfile = response.actionsByProfile;
  //       this.editModal.open();
  //     } else {
  //       this.messages.showMessages('profile.editProfile.messageActionsNotFound', 'ERROR');
  //     }
  //   });
  // }

  // confirmEdit() {
  //   this.hasError = false;
  //   if (this.editForm.valid) {
  //     const editeProfile = new UpdateProfileIn();
  //     this.editProfileIn.actionsByProfile = this.actionsByProfile;
  //     this.editProfileIn.pro_name = this.editForm.value.edit_pro_name;
  //     this.editProfileIn.pro_status = this.editForm.value.edit_pro_status;
  //     this.editProfileIn.pro_id_homologacion = +this.editForm.value.edit_pro_id_homologacion;
  //     this.editProfileIn.pro_id_homologacion_cf = +this.editForm.value.edit_pro_id_homologacion_cf;
  //     this.editProfileIn.pro_portal = this.editForm.value.edit_pro_portal;
  //     editeProfile.profile = this.editProfileIn;
  //     this.profileService.updateProfile(editeProfile).subscribe(response => {
  //       if (response.result === Result.Success) {
  //         this.messages.showMessages('profile.editProfile.messageEditSucces', 'SUCCESS');
  //         this.getUserByFilter();
  //       } else if (response.result === Result.ProfileExists) {
  //         this.messages.showMessages('profile.editProfile.messageProfileExists', 'ERROR');
  //       } else {
  //         this.messages.showMessages('profile.editProfile.messageError', 'ERROR');
  //       }
  //       this.editModal.closeModal();
  //     });
  //   } else {
  //     this.hasError = true;
  //   }
  // }

  selectAllActions() {
    for (const key in this.actionsByProfile) {
      if (this.actionsByProfile.hasOwnProperty(key)) {
        const element = this.actionsByProfile[key];
        this.actionsByProfile[key].abp_status = this.selectedAllActions ? 'V' : 'N';
      }
    }
  }

  closeEdit() {
    this.hasError = false;
    this.editProfileIn = new Profile();
    this.editForm = this.profileFormsService.getEditForm();
  }

  confirmDelete(event: any) {
    this.events.eventAlertModal.doIt = 'deleteItem';
    this.events.eventAlertModal.title = this.translateService.instant('general.label.deleteRegister');
    this.events.eventAlertModal.message =
      this.translateService.instant('profile.grid.columnsName.confirmDeleteMessage') + ' ' + event.data.pro_name + '?';
    this.events.eventGrid.event = event;
    this.alertModal.open();
  }

  // deleteItem() {
  //   if (this.events.eventGrid && this.events.eventGrid.event) {
  //     const updateProfileStatus = new UpdateProfileStatusIn();
  //     updateProfileStatus.proID = this.events.eventGrid.event.data.proID;
  //     this.profileService.UpdateProfileStatus(updateProfileStatus).subscribe(response => {
  //       if (response.result === Result.Success) {
  //         this.messages.showMessages('profile.deleteProfile.messageDeleteSucces', 'SUCCESS');
  //         this.getUserByFilter();
  //       } else if (response.result === Result.AssociatedUsers) {
  //         this.messages.showMessages('profile.deleteProfile.messageProfileAssociatedUsers', 'ERROR');
  //       } else {
  //         this.messages.showMessages('profile.deleteProfile.messageError', 'ERROR');
  //       }
  //     });
  //   }
  // }

}
