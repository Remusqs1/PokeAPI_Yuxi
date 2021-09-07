import { Component, OnInit, ViewChild } from '@angular/core';
import { CampaignFormService } from '../../Services/campaign.form.service';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { FormGroup } from '@angular/forms';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
//import { GetProfilesFilterIn } from '../../../../../Administration/Components/Profile/MethodParameters/getUserByFilterIn';
import { ProfileService } from '../../../../../Administration/Components/Profile/Services/profile.service';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment';
import { Result } from '../../../../../Commons/Classes/result';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { Profile } from '../../../../../Commons/Entities/profile';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-campaign-valid',
  templateUrl: './campaignValid.component.html',
  styleUrls: ['./campaignValid.component.css']
})
export class CampaignValidComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('showModal', { static: false }) createModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  totalRecords;
  totalRecord;
  settings;
  profilesList: Array<Profile>;
  
  filterForm: FormGroup;
  hasError = false;
  detailValidation= {
    name:'',
    lastname:'',
    detail:''
  }

  createModalAceptText = 'campaign.validation.modalAceptButton';
  createModalCloseText = 'campaign.validation.modalCancelButton';
  createModalTitle = 'campaign.validation.modalTitle';

  constructor(private campaignFormService: CampaignFormService,
    private translateService: TranslateService,
    private profileService: ProfileService) {
    this.filterForm = this.campaignFormService.getFilterForm();
  }

  ngOnInit() {
    this.settings = this.campaignFormService.getConfigDataTable();
    this.getProfiles();
    
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


    // const profileFilter = new GetProfilesFiltersIn();
    // profileFilter.name = this.filterForm.get('startDate').value;
    // profileFilter.status = this.filterForm.get('endDate').value;
    // profileFilter.pageSize = environment.pageSize;
    // profileFilter.pageNumber = pageNumber;
    // profileFilter.orderBy = orderBy;
    // profileFilter.orderDirection = orderDirection;
    // this.profileService.getProfilesFilters(profileFilter).subscribe(response => {
    //   if (response.result === Result.Success) {
    //     this.totalRecords = response.totalRecords;
    //     this.profilesList = response.profiles;
    //     this.smartTable.setPage(pageNumber);
    //   } else {
    //     this.messages.showMessages('campaign.getCampaign.messageError', 'ERROR');
    //   }
    // });
  }

  openDetailValidation(event:any) {
    this.detailValidation.name = event.data.pro_name;
    this.detailValidation.lastname = event.data.pro_status;
    this.detailValidation.detail = 'Fallo con el apellido y el numero de identificación de la persona'
    this.createModal.open();
  }

  detailValid(){
    this.hasError = false;
    this.createModal.closeModal();
  }

  closeCreate() {
    this.hasError = false;
  }

}
