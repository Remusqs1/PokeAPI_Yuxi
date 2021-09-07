import { Component, OnInit, ViewChild } from '@angular/core';
import { Result } from '../../../../../Commons/Classes/result';
import { Profile } from '../../../../../Commons/Entities/profile';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActionByProfile } from '../../../../../Commons/Entities/actionByProfile';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from '../../../../../Administration/Components/Profile/Services/profile.service';
import { CampaignFormsService } from '../../Services/campaign.forms.service';
import { delay } from 'rxjs/operators';
import { of } from 'rxjs';
import { CreateCampaignIn } from '../../MethodParameters/createCampaignIn';
import { Campaign } from '../../MethodParameters/campaign';
import { CampaignService } from '../../Services/campaign.service';
import { SelectAllCampaignIn } from '../../MethodParameters/selectAllCampaignIn';
import { DeleteCampaignIn } from '../../MethodParameters/deleteCampaignIn';
import { UpdateCampaignIn } from '../../MethodParameters/updateCampaignIn';
import { SelectCampaignFilterIn } from '../../MethodParameters/selectCampaignFilterIn';
import { SelectFieldIn } from '../../MethodParameters/selectFieldIn';
import { AsignFieldCampaignIn } from '../../MethodParameters/asignFieldCampaignIn';
import { CampaignField } from '../../MethodParameters/campaignField';
import { GetCompanyIn } from '../../MethodParameters/getCompanyIn';
import * as moment from 'moment';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { GetCampaignsIn } from '../../MethodParameters/getCampaignsIn';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  
  filterForm: FormGroup;
  createForm: FormGroup;
  editForm: FormGroup;
  editCampaignIn: UpdateCampaignIn = new UpdateCampaignIn();
  editProfileIn: Profile = new Profile();
  profilesList: Array<Profile>;
  campaignList: Array<Campaign>;
  actionsByProfile: Array<ActionByProfile>;
  labelNoRecords: string;
  totalRecords = 0;
  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };
  fieldList: Array<CampaignField>;
  fieldListUpdate: Array<CampaignField>;

  createModalAceptText = 'campaign.createCampaign.modalAceptButton';
  createModalCloseText = 'campaign.createCampaign.modalCancelButton';
  createModalTitle = 'campaign.createCampaign.modalTitle';
  editModalTitle = 'campaign.editCampaign.modalTitle';
  editModalAceptText = 'campaign.editCampaign.modalAceptButton';
  editModalCloseText = 'campaign.editCampaign.modalCancelButton';

  settings: any;

  hasError = false;
  selectedAllActions = false;

  listCompany: any;

  campaignsForm: FormGroup;
  campaigns: any[];
  submitted = false;


  constructor(private profileFormsService: CampaignFormsService,
    private translateService: TranslateService,
    private profileService: ProfileService,
    private campaignService: CampaignService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    // this.createForm = this.profileFormsService.getCreateForm();
    // this.createForm.get('create_cam_end_date').valueChanges.subscribe(value => {
    //   const dateU = (new Date(this.createForm.get('create_cam_star_date').value.year, this.createForm.get('create_cam_star_date').value.month - 1, this.createForm.get('create_cam_star_date').value.day)).getTime();
    //   const dateD = (new Date(value.year, value.month - 1, value.day)).getTime();
    //   if (dateU >= dateD) {
    //     console.log(value);
    //     this.createForm.get('create_cam_end_date').setErrors({ dateF: true });
    //   }
    // });
    // this.createForm.get('create_cam_closing_date').valueChanges.subscribe(value => {
    //   const dateU = (new Date(this.createForm.get('create_cam_end_date').value.year, this.createForm.get('create_cam_end_date').value.month - 1, this.createForm.get('create_cam_end_date').value.day)).getTime();
    //   const dateD = (new Date(value.year, value.month - 1, value.day)).getTime();
    //   if (dateU > dateD) {
    //     console.log(value);
    //     this.createForm.get('create_cam_closing_date').setErrors({ dateF: true });
    //   }
    // });
    // this.filterForm = this.profileFormsService.getFilterForm();
    // this.editForm = this.profileFormsService.getEditForm();
    // this.editForm.get('edit_cam_end_date').valueChanges.subscribe(value => {
    //   const dateU = (new Date(this.editForm.get('edit_cam_star_date').value.year, this.editForm.get('edit_cam_star_date').value.month - 1, this.editForm.get('edit_cam_star_date').value.day)).getTime();
    //   const dateD = (new Date(value.year, value.month - 1, value.day)).getTime();
    //   if (dateU >= dateD) {
    //     console.log(value);
    //     this.editForm.get('edit_cam_end_date').setErrors({ dateF: true });
    //   }
    // });
    // this.editForm.get('edit_cam_closing_date').valueChanges.subscribe(value => {
    //   const dateU = (new Date(this.editForm.get('edit_cam_end_date').value.year, this.editForm.get('edit_cam_end_date').value.month - 1, this.editForm.get('edit_cam_end_date').value.day)).getTime();
    //   const dateD = (new Date(value.year, value.month - 1, value.day)).getTime();
    //   if (dateU > dateD) {
    //     console.log(value);
    //     this.editForm.get('edit_cam_closing_date').setErrors({ dateF: true });
    //   }
    // });
    this.settings = this.profileFormsService.getConfigDataTable();
    // this.getProfiles();
    // this.getAllCampaign();
    // this.getCompany();

    this.createCampaignsForm();
  }

  changePage($event: any) {
    this.getProfiles();
  }

  sortDataTable($event: any) {
    //const splitted = $event.column.split('.').pop();
    this.getProfiles();
  }

  getCompany() {
    let input = new GetCompanyIn();
    this.campaignService.GetCompany(input).subscribe(response => {
      console.log('soyResponse', response);
      if (response.result === Result.Success) {
        this.listCompany = response.companies;
      }
      else {
        this.messages.showMessages('campaign.getCompany.messageError', 'ERROR');
      }
    });
  }


  getAllCampaign() {
    let input = new SelectAllCampaignIn();
    this.campaignService.selectAllCampaign(input).subscribe(response => {
      if (response.result === Result.Success) {
        this.campaignList = response.campaign;
        this.totalRecords = response.campaign.length;
        //this.smartTable.setPage(pageNumber);
      } else {
        this.messages.showMessages('campaign.getCampaign.messageError', 'ERROR');
      }
    });
  }

  getCampaignByName() {
    if (this.filterForm.value.campaignName == undefined || this.filterForm.value.campaignName == null || this.filterForm.value.campaignName == '') {
      this.getAllCampaign();
      this.filterForm.controls.campaignState.setValue(undefined);
    } else {
      let input = new SelectCampaignFilterIn();
      input.campaignName = this.filterForm.value.campaignName;
      this.campaignService.selectCampaignByName(input).subscribe(response => {
        if (response.result === Result.Success) {
          this.campaignList = response.campaign;
          this.totalRecords = response.campaign.length;
          //this.smartTable.setPage(pageNumber);
        } else {
          this.messages.showMessages('campaign.getCampaign.messageError', 'ERROR');
        }
      });
    }
  }

  getCampaignByStatus() {
    let input = new SelectCampaignFilterIn();
    input.status = this.filterForm.value.campaignState;
    this.campaignService.selectCampaignByStatus(input).subscribe(response => {
      if (response.result === Result.Success) {
        this.campaignList = response.campaign;
        this.totalRecords = response.campaign.length;
        //this.smartTable.setPage(pageNumber);
      } else {
        this.messages.showMessages('campaign.getCampaign.messageError', 'ERROR');
      }
    });
  }

  getProfiles() {

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

  createCampaign() {
    if (this.createForm.valid) {
      let createCampaign = new CreateCampaignIn();
      let campaign = new Campaign();

      campaign.cam_name_campaign = this.createForm.value.create_cam_name;
      campaign.cam_code_campaign = this.createForm.value.create_cam_code;
      campaign.cam_code_origin_entity = this.createForm.value.create_cam_code_entity;
      campaign.cam_sales_force = this.createForm.value.create_cam_sales_force;
      campaign.cam_start_date = this.createForm.value.create_cam_star_date.year + '/' + this.createForm.value.create_cam_star_date.month + '/' + this.createForm.value.create_cam_star_date.day;
      campaign.cam_end_date = this.createForm.value.create_cam_end_date.year + '/' + this.createForm.value.create_cam_end_date.month + '/' + this.createForm.value.create_cam_end_date.day;
      campaign.cam_closing_date = this.createForm.value.create_cam_closing_date.year + '/' + this.createForm.value.create_cam_closing_date.month + '/' + this.createForm.value.create_cam_closing_date.day;
      campaign.cam_status = this.createForm.value.create_cam_status;
      createCampaign.campaign = campaign;
      this.campaignService.createCampaign(createCampaign).subscribe((response) => {
        if (response.result === Result.Success) {
          this.messages.showMessages('campaign.createCampaign.messageCreateSucces', 'SUCCESS');
          this.createModal.closeModal();
          this.getAllCampaign();
        } else {
          this.messages.showMessages('campaign.createCampaign.messageError', 'ERROR');
          this.createModal.closeModal();
        }
      })

    }
  }

  editProfile(event) {
    this.editModal.open();

    this.editCampaignIn.campaignId = event.data.camID;
    console.log('event', event);


    this.editForm.patchValue({
      edit_cam_name: event.data.cam_name_campaign,
      edit_cam_code: event.data.cam_code_campaign,
      edit_cam_code_entity: +event.data.cam_code_origin_entity,
      edit_cam_sales_force: event.data.cam_sales_force,
      edit_cam_star_date: this.setFormatDate(event.data.cam_start_date),
      edit_cam_end_date: this.setFormatDate(event.data.cam_end_date),
      edit_cam_closing_date: this.setFormatDate(event.data.cam_closing_date),
      edit_cam_status: event.data.cam_status,
    });

    this.getField(event.data.camID);

  }

  setFormatDate(date: any): NgbDateStruct {
    let result: NgbDateStruct = null;
    const bDatestr = moment(date).format('YYYY-MM-DD');
    const x = bDatestr.split('-');
    result = {
      day: parseInt(x[2], 10),
      month: parseInt(x[1], 10),
      year: parseInt(x[0], 10)
    };
    return result;
  }

  confirmEdit() {
    this.editCampaignIn.campaignName = this.editForm.value.edit_cam_name;
    this.editCampaignIn.cam_code_campaign = this.editForm.value.edit_cam_code;
    this.editCampaignIn.campaignCodeOrigin = this.editForm.value.edit_cam_code_entity;
    this.editCampaignIn.campaignSalesForce = this.editForm.value.edit_cam_sales_force;
    this.editCampaignIn.campaignStartDate = this.editForm.value.edit_cam_star_date.year + '/' + this.editForm.value.edit_cam_star_date.month + '/' + this.editForm.value.edit_cam_star_date.day;
    this.editCampaignIn.campaignEndDate = this.editForm.value.edit_cam_end_date.year + '/' + this.editForm.value.edit_cam_end_date.month + '/' + this.editForm.value.edit_cam_end_date.day;
    this.editCampaignIn.campaignClosingDate = this.editForm.value.edit_cam_closing_date.year + '/' + this.editForm.value.edit_cam_closing_date.month + '/' + this.editForm.value.edit_cam_closing_date.day;
    this.editCampaignIn.campaignStatus = this.editForm.value.edit_cam_status;

    this.asignField(this.editCampaignIn.campaignId);
    console.log('update', this.editCampaignIn);
    this.campaignService.updateCampaign(this.editCampaignIn).subscribe(response => {
      if (response.result === Result.Success) {
        this.messages.showMessages('campaign.editCampaign.messageEditSucces', 'SUCCESS');
        this.getAllCampaign();
      } else if (response.result === Result.ProfileExists) {
        this.messages.showMessages('campaign.editCampaign.messageAgreementExists', 'ERROR');
      } else {
        this.messages.showMessages('campaign.editCampaign.messageError', 'ERROR');
      }
      this.editModal.closeModal();
    });
  }

  selectAllActions() {
    for (const key in this.fieldList) {
      if (this.fieldList.hasOwnProperty(key)) {
        this.fieldList[key].cfie_status = this.selectedAllActions ? 'V' : 'N';
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
      this.translateService.instant('campaign.grid.columnsName.confirmDeleteMessage') + ' ' + event.data.cam_name_campaign + '?';
    this.events.eventGrid.event = event;
    this.alertModal.open();
  }

  deleteItem() {
    if (this.events.eventGrid && this.events.eventGrid.event) {
      const deleteProfile = new DeleteCampaignIn();
      let campaign = new Campaign();
      campaign.camID = this.events.eventGrid.event.data.camID;
      deleteProfile.campaign = campaign;
      this.campaignService.deleteCampaign(deleteProfile).subscribe(response => {
        if (response.result === Result.Success) {
          this.messages.showMessages('campaign.deleteCampaign.messageDeleteSucces', 'SUCCESS');
          this.getAllCampaign();
        } else if (response.result === Result.AssociatedUsers) {
          this.messages.showMessages('campaign.deleteCampaign.messageCampaignAssociatedUsers', 'ERROR');
        } else {
          this.messages.showMessages('campaign.deleteCampaign.messageError', 'ERROR');
        }
      });
    }
  }

  getField(camID: number = 0) {
    let input = new SelectFieldIn();
    input.camID = camID;
    this.campaignService.selectField(input).subscribe(data => {
      this.fieldList = data.field;
    })
  }


  asignField(camID: number) {
    let index = 0;
    this.fieldList.forEach(element => {
      index++;
      let field = new AsignFieldCampaignIn();
      field.fieID = element.fieID;
      field.camID = camID;
      field.optional = element.cfie_show_optional;
      field.require = element.cfie_required;
      field.status = element.cfie_status;
      field.order = index;
      console.log(field);
      this.campaignService.asignFieldCampaign(field).subscribe(data => {
        console.log(data);
      });
    });

  }

  createCampaignsForm() {
    this.campaignsForm = this.formBuilder.group({
      documentNumber: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10),
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]]
    });
  }

  get c() {
    return this.campaignsForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.campaignsForm.invalid) {
      return;
    }
    const campaign = new GetCampaignsIn();
    campaign.Identification = this.campaignsForm.get('documentNumber').value;
    this.campaignService.GetCampaigns(campaign).subscribe((response) => {
      switch (response.result) {
        case Result.Success:
          this.campaigns = response.Campaigns;
          break;
        case Result.InvalidSession:
          this.invalidSession();
          break;
        case Result.InvalidPermissionRole:
          Swal.fire('Error', 'No cuenta con los permisos para esta acción', 'warning');
          break;
        case Result.Error:
          Swal.fire('Error', response.message, 'error');
          break;
        case Result.GenericError:
          Swal.fire('Error', response.message, 'error');
          break;
        default:
          Swal.fire('Error', response.message, 'error');
          break;
        }
    }, (error) => {
      Swal.fire('Error', 'Ha ocurrido un error; para mayor información por favor revisar el log',
       'error');
    });
  }

  numbersOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  clear() {
    this.submitted = false;
    this.campaignsForm.reset();
    this.campaigns = null;
    this.ngOnInit();
  }

  invalidSession() {
    Swal.fire('Error', 'Su sessión ha caducado, ingrese de nuevo al sistema', 'error');
    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }

}
