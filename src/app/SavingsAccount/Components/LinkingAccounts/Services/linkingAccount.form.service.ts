import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';

@Injectable()
export class LinkingAccountsFormService {
  constructor(
    private formBuilder: FormBuilder,
    private statusPipe: StatusPipe
  ) { }

  getSearchAccounts(): FormGroup {
    return this.formBuilder.group({
      documentTypeDdl: [, [Validators.required]],
      clientDocument: [
        { value: '', disabled: false },
        [
          Validators.required,
          // Validators.pattern('^[0-9]*$'),
          // Validators.minLength(minLength),
          // Validators.maxLength(maxLength),
        ],
      ],
    });
  }

  getConfigDataTable() {
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
        editButtonContent: '<i class="ti-pencil text-credi m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
        confirmSave: true,
      },
    };
    const columns: any = {
      Id: {
        title: 'Id',
        filter: false,
      },
      AccountNumber: {
        title: 'AccountNumber',
        filter: false,
      },
      EstadoCliente: {
        title: 'EstadoCliente',
        filter: false,
      },
      Compañia: {
        title: 'Compañia',
        filter: false,
      },
      Vigencia: {
        title: 'Vigencia',
        filter: false,
      },
      Saldo: {
        title: 'Saldo',
        filter: false,
      },
    };
    (<any>settings).columns = columns;
    return settings;
  }

  getFormEditAccount() {
    return this.formBuilder.group({
      modal_typeId: [{ value: undefined, disabled: true }],
      modal_Id: [{ value: undefined, disabled: true }],
      modal_fullName: [{ value: undefined, disabled: true }],
      modal_userAddres: [{ value: undefined, disabled: true }],
      modal_userCompanyAddress: [{ value: undefined, disabled: true }],
      modal_date: [{ value: undefined, disabled: true }],
      modal_branch: [{ value: undefined, disabled: true }],

    });
  }


  getFormAssociateAccount() {
    return this.formBuilder.group({
      accountToAssociate: [, [Validators.required]],
      subtype: [, [Validators.required]]
    });
  }
}
