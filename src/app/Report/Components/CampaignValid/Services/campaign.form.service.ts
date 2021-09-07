import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CampaignFormService {

  constructor(private formBuilder:FormBuilder) { }

  getConfigDataTable() {

    const settings = {
      actions: {
        add: false,
        edit: true,
        copy: false,
        delete: true,
        position: 'left',
        columnTitle: '',
      },
      hideSubHeader: true,
      mode: 'external',
      edit: {
        editButtonContent: '<i class="ti-pencil text-credi m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
        confirmSave: true
      },
      delete: {
        deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
        confirmDelete: true,
      }
    };

    const columns: any = {
      // pro_id: {
      //   title: 'campaign.grid.columnsName.idRequest',
      //   filter: false
      // },
      pro_name: {
        title: 'campaign.grid.columnsName.firstname',
        filter: false
      },
      pro_status: {
        title: 'campaign.grid.columnsName.lastname',
        filter: false
      }
    };
    (<any>settings).columns = columns;
    return settings;
  }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      startDate: [{ value: undefined, disabled: false }, []],
      endDate: [{ value: undefined, disabled: false }, []],
      actionType: [{ value: undefined, disabled: false }, []],
    });
  }
}
