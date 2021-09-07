import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { Agreement } from '../../../../Commons/Entities/agreement';
import { Client } from '../../../../Commons/Entities/client';
import { Campaign } from '../../../../Commons/Entities/campaing';

@Injectable()
export class OfferFormsService {
  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      filterDocumentType: [{ value: undefined, disabled: false }, []],
      filterDocumentNumber: [{ value: undefined, disabled: false }, []],
      filterdateStart: [{ value: undefined, disabled: false }, []],
      filterdateEnd: [{ value: undefined, disabled: false }, []],
      filterStatus: [{ value: undefined, disabled: false }, []],
    });
  }

  getEditForm(): FormGroup {
    const form = this.formBuilder.group({
      edit_off_first_name: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      edit_off_second_name: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      edit_off_first_surname: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20) ]],
      edit_off_second_surname: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      edit_off_birthdate: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      edit_off_expedition_date: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      edit_off_birthplace: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      edit_off_expedition_place: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_off__affiliation_number: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_off_cellphone: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_off_email: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_off_profession: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_off_account_manager: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_off_collection_manager: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_off_stratum: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]]
    });

    return form;
  }

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
      'client.cli_document_number': {
        title: 'offer.grid.columnsName.documentNumber',
        filter: false,
      },
      'client.cli_first_name': {
        title: 'offer.grid.columnsName.fullName',
        filter: false,
      },
      campaign: {
        title: 'offer.grid.columnsName.campaign',
        filter: false,
        valuePrepareFunction: (campaign) => {
          return campaign.cam_name_campaign;
        }
      },
      off_step: {
        title: 'offer.grid.columnsName.lastState',
        filter: false,
      },
      agreement: {
        title: 'offer.grid.columnsName.date',
        filter: false,
        valuePrepareFunction: (agreement) => {
          return moment(agreement.agr_creation_date).format('YYYY-MM-DD');
        }
      },

    };
    (<any>settings).columns = columns;
    return settings;
  }
  getConfigDataTableDetail() {

    const settings = {
      actions: {
        add: false,
        edit: true,
        copy: false,
        delete: false,
        position: 'left',
        columnTitle: '',
      },
      hideSubHeader: true,
      mode: 'external',
      edit: {
        editButtonContent: '<i class="ti-layers-alt text-info m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
        confirmSave: true
      }
    };

    const columns: any = {
      fph_crea_date: {
        title: 'offer.grid.columnsName.date',
        filter: false
      }
    };
    (<any>settings).columns = columns;
    return settings;
  }
}