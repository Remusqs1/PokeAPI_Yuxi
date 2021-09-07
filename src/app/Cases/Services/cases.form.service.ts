import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusPipe } from './../../Shared/Pipes/statusPipe';
import { CustomValidators } from './../../Commons/Classes/customValidators';
import * as moment from 'moment';
import { Company } from '../../Commons/Classes/baseIn';

@Injectable()
export class CasesFormService {
  constructor(
    private formBuilder: FormBuilder,
    private statusPipe: StatusPipe
  ) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      adviserId: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.minLength(7),
          Validators.maxLength(10),
        ],
      ],
    });
  }

  getFormEditCase() {
    return this.formBuilder.group({
      modal_FirstName: [{ value: undefined, disabled: true }],
      modal_SecondName: [{ value: undefined, disabled: true }],
      modal_FirstSurname: [{ value: undefined, disabled: true }],
      modal_SecondSurname: [{ value: undefined, disabled: true }],
      modal_CreationDate: [{ value: undefined, disabled: true }],
      modal_FilingNumber: [{ value: undefined, disabled: true }],
      modal_Mobile: [{ value: undefined, disabled: true }],
      modal_Status: [{ value: undefined, disabled: true }],
      modal_CurrentAdviser: [{ value: undefined, disabled: true }],
      modal_NewAdviser: [{ value: undefined, disabled: false }],
      modal_CaseId_Hidden: [{ value: undefined, disabled: true, hidden: true }],
      modal_Company: [{ value: undefined, disabled: true }],
      modal_CurrentAviserId_Hidden: [
        { value: undefined, disabled: true, hidden: true },
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
      delete: {
        deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
        saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
        cancelButtonContent: '<i class="ti-close text-danger"></i>',
        confirmDelete: true,
      },
    };

    const columns: any = {
      FilingNumber: {
        title: '# radicado',
        filter: false,
      },
      CreationDate: {
        title: 'Fecha creación',
        filter: false,
      },
      FirstName: {
        title: 'nombre',
        filter: false,
      },
      Surname: {
        title: 'apellido',
        filter: false,
      },
      CompanyId: {
        title: 'Compañia',
        filter: false,
        valuePrepareFunction: (CompanyId) => {
          return Company[CompanyId];
        },
      },
      Status: {
        title: 'Estado',
        filter: false,
      },
    };
    // const columns: any = {
    //   usr_userName: {
    //     title: 'user.grid.columnsName.name',
    //     filter: false,
    //   },
    //   usr_fullName: {
    //     title: 'user.grid.columnsName.usr_fullName',
    //     filter: false,
    //   },
    //   usr_documentType: {
    //     title: 'Tipo documento',
    //     filter: false,
    //     valuePrepareFunction: (usr_documentType =>{
    //       return usr_documentType == 1 ? 'C.C.' : usr_documentType == 2 ? 'NIT' : '-'
    //     })
    //   },
    //   usr_numberDocument: {
    //     title: 'Número de documento',
    //     filter: false,
    //   },
    //   usr_email: {
    //     title: 'user.grid.columnsName.usr_email',
    //     filter: false,
    //   },
    //   usr_companyID: {
    //     title: 'Compañia',
    //     filter: false,
    //     valuePrepareFunction: (usr_companyID =>{
    //       return usr_companyID == 1 ? 'Credivalores' : usr_companyID == 2 ? 'Credifinanciera' : '-'
    //     })
    //   },
    //   rl_name: {
    //     title: 'user.grid.columnsName.rl_name',
    //     filter: false,
    //   },
    // };

    (<any>settings).columns = columns;
    return settings;
  }
}
