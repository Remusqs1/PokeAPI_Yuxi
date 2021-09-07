import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import * as moment from 'moment';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';

@Injectable()
export class OfferHistoryFormsService {
  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      // filterDocumentType: [{ value: undefined, disabled: false }, []],
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
      [Validators.required, CustomValidators.MaxLength(20)]],
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
        edit: false,
        copy: false,
        delete: false,
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
        title: 'offerHistory.grid.columnsName.documentNumber',
        filter: false,
      },
      'client.cli_full_name': {
        title: 'offerHistory.grid.columnsName.fullName',
        filter: false,
      },
      campaign: {
        title: 'offerHistory.grid.columnsName.campaign',
        filter: false,
        valuePrepareFunction: (campaign) => {
          return campaign.cam_name_campaign;
        }
      },
      off_step: {
        title: 'offerHistory.grid.columnsName.lastState',
        filter: false,
      },
      off_modification_date: {
        title: 'offerHistory.grid.columnsName.date',
        filter: false,
        valuePrepareFunction: date => {
          return (date != null ? date.format("DD/MM/YYYY") : "--");
        }
      },

    };
    let custom: any = [
      {
        name: 'Detail',
        icon: '<i class="ti ti-archive text-credi m-r-10"></i>',
        title: 'Detail',
        validateActions: [36]

      },
      {
        name: 'DetailMessage',
        icon: '<i class="ti ti-email text-credi m-r-10"></i>',
        title: 'Detail Message',
        validateActions: [37]

      },
    ];
    (<any>settings).actions.custom = custom;
    (<any>settings).columns = columns;
    return settings;
  }

  getConfigDataTableDetail() {

    const settings = {
      actions: {
        add: true,
        edit: false,
        copy: false,
        delete: false,
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
      stepID: {
        title: 'offerHistory.grid.columnsName.documentNumber',
        filter: false,
      },
      hisStep_step_date: {
        title: 'offerHistory.grid.columnsName.date',
        filter: false,
        valuePrepareFunction: (agreement) => {
          return moment(agreement.agr_creation_date).format('YYYY-MM-DD');
        }
      },

    };
    (<any>settings).columns = columns;
    return settings;
  }

  getConfigDataTableDetailMessage() {

    const settings = {
      actions: {
        add: true,
        edit: false,
        copy: false,
        delete: false,
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
      off_send_email_status: {
        title: 'offerHistory.grid.columnsName.emailStatus',
        filter: false,
      },
      off_open_link_email: {
        title: 'offerHistory.grid.columnsName.linkEmail',
        filter: false,
      },
      off_send_sms_status: {
        title: 'offerHistory.grid.columnsName.smsStatus',
        filter: false
      },
      off_open_link_sms: {
        title: 'offerHistory.grid.columnsName.linkSms',
        filter: false
      }

    };
    (<any>settings).columns = columns;
    return settings;
  }
}