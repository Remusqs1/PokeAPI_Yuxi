import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ClientFormService } from '../../Services/client.form.service';
import { Profile } from '../../../../../Commons/Entities/profile';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  constructor(private formService: ClientFormService) { }

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  totalRecords;
  settings;
  profilesList: Array<Profile>;
  hasError = false;

  filterForm: FormGroup;
  totalRecord = 1

  ngOnInit() {
    this.createForm();
    this.settings = this.formService.getConfigDataTable();
    this.getProfiles();
  }

  createForm() {
    this.filterForm = this.formService.getFilterForm();
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

    // const profileFilter = new GetProfilesFiltersIn();
    // profileFilter.name = this.filterForm.get('documentNumber').value;
    // profileFilter.pageSize = environment.pageSize;
    // profileFilter.pageNumber = pageNumber;
    // profileFilter.orderBy = orderBy;
    // profileFilter.orderDirection = orderDirection;
    // this.profileService.getProfilesFilters(profileFilter).subscribe(response => {
    //   if (response.result === Result.Success) {
    //     console.log(response.profiles);
    //     this.totalRecords = response.totalRecords;
    //     this.profilesList = response.profiles;
    //     this.smartTable.setPage(pageNumber);
    //   } else {
    //     this.messages.showMessages('campaign.getCampaign.messageError', 'ERROR');
    //   }
    // });
  }

}
