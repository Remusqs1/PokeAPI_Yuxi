import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { FormGroup } from '@angular/forms';
import { Profile } from '../../../../../Commons/Entities/profile';
import { ActionByProfile } from '../../../../../Commons/Entities/actionByProfile';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../../../../../Administration/Components/Profile/Services/profile.service';
import { Result } from '../../../../../Commons/Classes/result';
import { AgreementFormsService } from '../../Services/agreement.forms.service';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AgreementService } from '../../Services/agreement.service';
import { CreateAgreementIn } from '../../MethodsParameter/createAgreementIn';
import { SelectAgreementFilterIn } from '../../MethodsParameter/selectAgreementFilterIn';
import { Agreement } from '../../../../../Commons/Entities/agreement';
import { UpdateAgreementIn } from '../../MethodsParameter/updateAgreementIn';
import { DeleteAgreementIn } from '../../MethodsParameter/deleteAgreementIn';
import { DocumentAgreement } from '../../MethodsParameter/documentAgreement';
import { SelectDocumentAgreementIn } from '../../MethodsParameter/selectDocumentAgreementIn';
import { AsignDocumentAgreementIn } from '../../MethodsParameter/asignDocumentAgreementIn';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css']
})
export class AgreementComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  filterForm: FormGroup;
  createForm: FormGroup;
  editForm: FormGroup;
  editProfileIn: Profile = new Profile();
  editAgreementIn: UpdateAgreementIn = new UpdateAgreementIn();
  profilesList: Array<Profile>;
  actionsByProfile: Array<ActionByProfile>;
  labelNoRecords: string;
  totalRecords = 0;

  documentList: Array<DocumentAgreement>;

  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };

  agreementList: Array<Agreement>;

  createModalAceptText = 'agreement.createAgreement.modalAceptButton';
  createModalCloseText = 'agreement.createAgreement.modalCancelButton';
  createModalTitle = 'agreement.createAgreement.modalTitle';
  editModalTitle = 'agreement.editAgreement.modalTitle';
  editModalAceptText = 'agreement.editAgreement.modalAceptButton';
  editModalCloseText = 'agreement.editAgreement.modalCancelButton';

  settings: any;

  hasError = false;
  selectedAllActions = false;

  constructor(private profileFormsService: AgreementFormsService,
    private translateService: TranslateService,
    private profileService: ProfileService, private AgreementService: AgreementService) { }

  ngOnInit() {
    this.createForm = this.profileFormsService.getCreateForm();
    this.filterForm = this.profileFormsService.getFilterForm();
    this.editForm = this.profileFormsService.getEditForm();
    this.settings = this.profileFormsService.getConfigDataTable();
    this.getAllAgreement();
    this.getProfiles();
    this.getDocumentAgreement(0);
  }

  changePage($event: any) {
    this.getProfiles($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getProfiles(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  getProfiles(pageNumber: number = 1, orderBy: string = '', orderDirection: string = '') {

    const listProfile = new Array<Profile>();

    let profile = new Profile();
    profile.proID = 1;
    profile.pro_name = 'Administrador';
    profile.pro_status = 'V';

    listProfile.push(profile);

    of(listProfile).pipe(delay(1000)).subscribe(result => {
      this.profilesList = result;
    });
  }

  openCreateProfileModal() {
    this.createModal.open();
  }

  closeCreate() {
    this.hasError = false;
    this.createForm = this.profileFormsService.getCreateForm();
  }

  getAllAgreement() {
    let input = new SelectAgreementFilterIn();
    this.AgreementService.selectAllAgreement(input).subscribe(response => {
      if (response.result === Result.Success) {
        this.agreementList = response.agreement;
        this.totalRecords = response.agreement.length;
        //this.smartTable.setPage(pageNumber);
      } else {
        this.messages.showMessages('agreement.getAgreement.messageError', 'ERROR');
      }
    });
  }

  getAgreementByName() {
    if (this.filterForm.value.agreementName == undefined || this.filterForm.value.agreementName == null || this.filterForm.value.agreementName == '') {
      this.getAllAgreement();
      this.filterForm.controls.agreementState.setValue(undefined);
    } else {
      let input = new SelectAgreementFilterIn();
      input.nameAgreement = this.filterForm.value.agreementName;
      console.log('input', input.nameAgreement);
      this.AgreementService.selectAgreementByName(input).subscribe(response => {
        if (response.result === Result.Success) {
          this.agreementList = response.agreement;
          this.totalRecords = response.agreement.length;
          //this.smartTable.setPage(pageNumber);
        } else {
          this.messages.showMessages('agreement.getAgreement.messageError', 'ERROR');
        }
      });
    }
  }

  getAgreementByDocument() {
    let input = new SelectAgreementFilterIn();

    if (this.filterForm.value.agreementState !== 'undefined') {
      input.status = this.filterForm.value.agreementState;
      this.AgreementService.selectAgreementByDocument(input).subscribe(response => {
        if (response.result === Result.Success) {
          this.agreementList = response.agreement;
          this.totalRecords = response.agreement.length;
          //this.smartTable.setPage(pageNumber);
        } else {
          this.messages.showMessages('agreement.getAgreement.messageError', 'ERROR');
        }
      });
    } else if (this.filterForm.value.agreementState === 'undefined') {
      this.getAllAgreement();
    }

  }

  getDocumentAgreement(agreementID: number) {
    let document = new SelectDocumentAgreementIn()

    document.agreementID = agreementID;

    this.AgreementService.selectAllDocument(document).subscribe((data: any) => {
      this.documentList = data.documentAgreement;
      console.log(this.documentList);
    });
  }

  asignDocumentAgreement(agreementID: number) {
    this.documentList.forEach(element => {
      if (element.dag_status === "V") {
        let document = new AsignDocumentAgreementIn();
        document.agreementID = agreementID;
        document.display = true;
        document.edit = true
        document.status = element.dag_status;
        document.documentID = element.docID;

        this.AgreementService.asignDocumentAgreement(document).subscribe(data => {
          console.log(data);
        })
      }

    })
  }

  createAgreement() {
    if (this.createForm.valid) {
      let createAgreement = new CreateAgreementIn();

      createAgreement.code = this.createForm.value.create_agree_code;
      createAgreement.name = this.createForm.value.create_agree_name;
      createAgreement.documentNumber = this.createForm.value.create_agree_document;
      createAgreement.flexibleFee = this.createForm.value.create_agree_fee;
      createAgreement.status = this.createForm.value.create_agree_status;

      this.AgreementService.createAgreement(createAgreement).subscribe((response) => {
        if (response.result === Result.Success) {
          this.messages.showMessages('agreement.createAgreement.messageCreateSuccess', 'SUCCESS');
          this.createModal.closeModal();
          this.getAllAgreement();
        } else {
          this.messages.showMessages('agreement.createAgreement.messageError', 'ERROR');
          this.createModal.closeModal();
        }
      })

    }
  }

  editProfile(event: any) {

    this.editModal.open();

    this.editAgreementIn.agrID = event.data.agrID;

    this.editForm.patchValue({
      edit_agree_name: event.data.agr_name,
      edit_agree_code: event.data.agr_code,
      edit_agree_document: event.data.agr_document_number,
      edit_agree_fee: event.data.agr_flexible_fee,
      edit_agree_status: event.data.agr_status
    });

    this.getDocumentAgreement(event.data.agrID);

    console.log(this.editForm);
  }

  // getAgreement() {
  //   this.filterForm
  // }

  confirmEdit() {
    this.editAgreementIn.name = this.editForm.value.edit_agree_name;
    this.editAgreementIn.code = this.editForm.value.edit_agree_code;
    this.editAgreementIn.documentNumber = this.editForm.value.edit_agree_document;
    this.editAgreementIn.flexibleFee = this.editForm.value.edit_agree_fee;
    this.editAgreementIn.status = this.editForm.value.edit_agree_status;

    this.asignDocumentAgreement(this.editAgreementIn.agrID);

    this.AgreementService.updateAgreement(this.editAgreementIn).subscribe(response => {
      if (response.result === Result.Success) {
        this.messages.showMessages('agreement.editAgreement.messageEditSucces', 'SUCCESS');
        this.getAllAgreement();
      } else if (response.result === Result.ProfileExists) {
        this.messages.showMessages('agreement.editAgreement.messageAgreementExists', 'ERROR');
      } else {
        this.messages.showMessages('agreement.editAgreement.messageError', 'ERROR');
      }
      this.editModal.closeModal();
    });
  }

  selectAllActions() {
    for (const key in this.documentList) {
      if (this.documentList.hasOwnProperty(key)) {
        const element = this.documentList[key];
        this.documentList[key].dag_status = this.selectedAllActions ? 'V' : 'N';
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
      this.translateService.instant('agreement.grid.columnsName.confirmDeleteMessage') + ' ' + event.data.agr_name + '?';
    this.events.eventGrid.event = event;
    this.alertModal.open();
  }

  deleteItem() {
    if (this.events.eventGrid && this.events.eventGrid.event) {
      const deleteAgreement = new DeleteAgreementIn();
      deleteAgreement.agrID = this.events.eventGrid.event.data.agrID;
      this.AgreementService.deleteAgreement(deleteAgreement).subscribe(response => {
        if (response.result === Result.Success) {
          this.messages.showMessages('agreement.deleteAgreement.messageDeleteSucces', 'SUCCESS');
          this.getAllAgreement();
        } else if (response.result === Result.AssociatedUsers) {
          this.messages.showMessages('agreement.deleteAgreement.messageAgreementAssociatedUsers', 'ERROR');
        } else {
          this.messages.showMessages('agreement.deleteAgreement.messageError', 'ERROR');
        }
      });
    }
  }

}
