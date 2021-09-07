import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
@Injectable()
export class ProfileFormsService {

  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      usr_userName: [{ value: undefined, disabled: false }, []],
      rl_name: [{ value: undefined, disabled: false }, []],
    });
  }

  getCreateForm(): FormGroup {
    const form = this.formBuilder.group({
      create_pro_name: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      create_pro_status: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      create_pro_portal: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      create_pro_id_homologacion: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
      create_pro_id_homologacion_cf: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]]
    });
    return form;
  }

  getEditForm(): FormGroup {
    const form = this.formBuilder.group({
      edit_pro_name: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20)]],
      edit_pro_status: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      edit_pro_id_homologacion: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
      edit_pro_id_homologacion_cf: [{ value: undefined, disabled: false },
      [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
      edit_pro_portal: [{ value: undefined, disabled: false },
      [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
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
      usr_userName: {
        title: 'user.grid.columnsName.name',
        filter: false,
      },
      usr_fullName: {
        title: 'user.grid.columnsName.usr_fullName',
        filter: false,
        // valuePrepareFunction: (pro_status) => {
        //   return this.statusPipe.transform(pro_status);
        // }
      },
      usr_documentType: {
        title: 'Tipo documento',
        filter: false,
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
