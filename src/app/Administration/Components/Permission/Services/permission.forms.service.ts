import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import * as moment from 'moment';

@Injectable()
export class PermissionFormsService {

  constructor(private formBuilder: FormBuilder,
    private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      pm_code: [{ value: undefined, disabled: false }, []],
      pm_name: [{ value: undefined, disabled: false }, []],
    });
  }

  // getCreateForm(): FormGroup {
  //   const form = this.formBuilder.group({
  //     create_pro_name: [{ value: undefined, disabled: false },
  //     [Validators.required, CustomValidators.MaxLength(20)]],
  //     create_pro_status: [{ value: undefined, disabled: false },
  //     [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
  //     create_pro_portal: [{ value: undefined, disabled: false },
  //     [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
  //     create_pro_id_homologacion: [{ value: undefined, disabled: false },
  //     [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
  //     create_pro_id_homologacion_cf: [{ value: undefined, disabled: false },
  //     [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]]
  //   });
  //   return form;
  // }

  // getEditForm(): FormGroup {
  //   const form = this.formBuilder.group({
  //     edit_pro_name: [{ value: undefined, disabled: false },
  //     [Validators.required, CustomValidators.MaxLength(20)]],
  //     edit_pro_status: [{ value: undefined, disabled: false },
  //     [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
  //     edit_pro_id_homologacion: [{ value: undefined, disabled: false },
  //     [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
  //     edit_pro_id_homologacion_cf: [{ value: undefined, disabled: false },
  //     [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
  //     edit_pro_portal: [{ value: undefined, disabled: false },
  //     [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
  //   });

  //   return form;
  // }

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
      // pmID: {
      //   title: 'ID',
      //   filter: false,
      // },

      pm_name: {
        title: 'Nombre',
        filter: true,
      },
      pm_code: {
        title: 'Código',
        filter: false,
      },
      pm_creationUser: {
        title: 'Creado por',
        filter: false,
      },
      pm_creationDate: {
        title: 'Fecha creación',
        filter: false,
        valuePrepareFunction: (resp) => {
          return moment(resp).format('YYYY-MM-DD');
        },
      },
      pm_modificationUser: {
        title: 'Modificado por',
        filter: false,
      },
      pm_modificationDate: {
        title: 'Fecha modificación',
        filter: false,
        valuePrepareFunction: (resp) => {
          return moment(resp).format('YYYY-MM-DD');
        },
      },
      pm_status: {
        title: 'Estado',
        filter: false,
        valuePrepareFunction: (resp) => {
          return this.statusPipe.transform(resp);
        }
      },
    };

    (<any>settings).columns = columns;
    return settings;
  }

  getCreateForm(): FormGroup {
    const form = this.formBuilder.group({
      create_pm_name: [{ value: undefined, disabled: false },
      [Validators.required,
      CustomValidators.MaxLength(20),
      Validators.minLength(4),
      CustomValidators.IsNullorEmpty]],
      create_pm_description: [{ value: undefined, disabled: false },
      [Validators.required,
      CustomValidators.MaxLength(50),
      Validators.minLength(6),
      Validators.nullValidator,
      CustomValidators.IsNullorEmpty]],
    });
    return form;
  }

  getEditForm(): FormGroup {
    const form = this.formBuilder.group({
      edit_pm_code: [{ value: undefined, disabled: true },
      [Validators.required,
      CustomValidators.MaxLength(20),
      Validators.minLength(4),
      CustomValidators.IsNullorEmpty]],
      edit_pm_name: [{ value: undefined, disabled: false },
      [Validators.required,
      CustomValidators.MaxLength(20),
      Validators.minLength(4),
      CustomValidators.IsNullorEmpty]],
      edit_pm_description: [{ value: undefined, disabled: false },
      [Validators.required,
      CustomValidators.MaxLength(50),
      Validators.minLength(6),
      Validators.nullValidator,
      CustomValidators.IsNullorEmpty]],
      edit_pm_status: [{ value: undefined, disabled: false },
      [Validators.required,
      Validators.nullValidator,
      CustomValidators.IsNullorEmpty]],

    });
    return form;
  }

}
