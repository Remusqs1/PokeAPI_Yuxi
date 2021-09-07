import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';


@Injectable()
export class UserFormsService {

  constructor(private formBuilder: FormBuilder,
    private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      usr_userName: [{ value: undefined, disabled: false }, []],
      usr_numberDocument: [{ value: undefined, disabled: false }, []],
    });
  }

  getCreateForm(): FormGroup {
    const form = this.formBuilder.group({
      create_usr_userName: [{ value: undefined, disabled: false },
      [Validators.required,
      CustomValidators.MaxLength(20),
      Validators.minLength(6),
      Validators.pattern(/^[a-zA-Z]+$/),
      CustomValidators.IsNullorEmpty]],
      // create_usr_password: [{ value: undefined, disabled: false },
      // [Validators.required,
      // CustomValidators.MaxLength(15),
      // Validators.minLength(6),
      // Validators.nullValidator,
      // CustomValidators.IsNullorEmpty]],
      create_usr_fullName: [{ value: undefined, disabled: false },
      [Validators.required,
      Validators.nullValidator,
      Validators.minLength(5),
      CustomValidators.MaxLength(50),
      CustomValidators.IsNullorEmpty]],
      create_usr_documentType:
        [{ value: undefined, disabled: false },
        [Validators.required,
        CustomValidators.Numeric]],
      create_usr_numberDocument:
        [{ value: undefined, disabled: false },
        [Validators.required,
        Validators.nullValidator,
        Validators.minLength(5),
        Validators.pattern('^[0-9]*$'),
        CustomValidators.MaxLength(10),
        CustomValidators.IsNullorEmpty]],
      create_usr_email: [{ value: undefined, disabled: false },
      [Validators.required,
      Validators.nullValidator,
      Validators.minLength(5),
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      CustomValidators.MaxLength(50),
      CustomValidators.IsNullorEmpty]],
      // create_usr_companyID: [{ value: undefined, disabled: false },
      // [Validators.required,
      // Validators.nullValidator,
      // CustomValidators.IsNullorEmpty]],
      // create_usr_type: [{ value: undefined, disabled: false },
      // [Validators.required,
      // Validators.nullValidator,
      // CustomValidators.IsNullorEmpty]],
      create_usr_role: [{ value: undefined, disabled: false },
      [Validators.required,
      Validators.nullValidator,
      CustomValidators.IsNullorEmpty]],
      // create_usr_force: [{ value: undefined, disabled: false },
      // [Validators.required,
      // Validators.nullValidator,
      // CustomValidators.IsNullorEmpty]],
    });
    return form;
  }

  getEditForm(): FormGroup {
    const form = this.formBuilder.group({
      edit_usr_userName: [{ value: undefined, disabled: true },
      [Validators.required,
      CustomValidators.MaxLength(20),
      Validators.minLength(6),
      CustomValidators.IsNullorEmpty]],
      // edit_usr_password: [{ value: undefined, disabled: false },
      // [Validators.required,
      // CustomValidators.MaxLength(15),
      // Validators.minLength(6),
      // Validators.nullValidator,
      // CustomValidators.IsNullorEmpty]],
      edit_usr_fullName: [{ value: undefined, disabled: false },
      [Validators.required,
      Validators.nullValidator,
      Validators.minLength(5),
      CustomValidators.MaxLength(50),
      CustomValidators.IsNullorEmpty]],
      edit_usr_documentType:
        [{ value: undefined, disabled: false },
        [Validators.required,
        CustomValidators.Numeric]],
      edit_usr_numberDocument:
        [{ value: undefined, disabled: false },
        [Validators.required,
        Validators.nullValidator,
        Validators.minLength(5),
        CustomValidators.MaxLength(50),
        CustomValidators.IsNullorEmpty]],
      edit_usr_email: [{ value: undefined, disabled: false },
      [Validators.required,
      Validators.nullValidator,
      Validators.minLength(5),
      CustomValidators.MaxLength(50),
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
      // Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
      CustomValidators.IsNullorEmpty]],
      // edit_usr_companyID: [{ value: undefined, disabled: false },
      // [Validators.required,
      // Validators.nullValidator,
      // CustomValidators.IsNullorEmpty]],
      // edit_usr_type: [{ value: undefined, disabled: false },
      // [Validators.required,
      // Validators.nullValidator,
      // CustomValidators.IsNullorEmpty]],
      edit_usr_role: [{ value: undefined, disabled: false },
      [Validators.required,
      Validators.nullValidator,
      CustomValidators.IsNullorEmpty]],
    });
    return form;
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
      usr_userName: {
        title: 'user.grid.columnsName.name',
        filter: false,
      },
      usr_fullName: {
        title: 'user.grid.columnsName.usr_fullName',
        filter: false,
      },
      usr_documentType: {
        title: 'Tipo documento',
        filter: false,
        valuePrepareFunction: (usr_documentType => {
          return usr_documentType == 1 ? 'C.C.' : usr_documentType == 2 ? 'NIT' : '-'
        })
      },
      usr_numberDocument: {
        title: 'Número de documento',
        filter: false,
      },
      usr_email: {
        title: 'user.grid.columnsName.usr_email',
        filter: false,
      },
      usr_companyID: {
        title: 'Compañia',
        filter: false,
        valuePrepareFunction: (usr_companyID => {
          return usr_companyID == 1 ? 'Credivalores' : usr_companyID == 2 ? 'Credifinanciera' : '-'
        })
      },
      rl_name: {
        title: 'user.grid.columnsName.rl_name',
        filter: false,
      },
    };

    (<any>settings).columns = columns;
    return settings;
  }

}
