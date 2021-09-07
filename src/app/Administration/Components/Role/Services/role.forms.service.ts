import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import * as moment from 'moment';

@Injectable()
export class RoleFormsService {

  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      rl_code: [{ value: undefined, disabled: false }, []],
      rl_name: [{ value: undefined, disabled: false }, []],
    });
  }

  getCreateForm(): FormGroup {
    const form = this.formBuilder.group({
      create_rl_name: [{ value: undefined, disabled: false },
                           [Validators.required, 
                            CustomValidators.MaxLength(20),
                            Validators.minLength(4),
                            CustomValidators.IsNullorEmpty]],
      
    });
    return form;
  }

  getEditForm(): FormGroup {
    const form = this.formBuilder.group({
      edit_rl_code: [{ value: undefined, disabled: true },
                    [Validators.required, 
                    CustomValidators.MaxLength(20),
                    Validators.minLength(4),
                    CustomValidators.IsNullorEmpty]],
      edit_rl_name: [{ value: undefined, disabled: false },
                           [Validators.required, 
                            CustomValidators.MaxLength(20),
                            Validators.minLength(4),
                            CustomValidators.IsNullorEmpty]],
      edit_rl_status: [{ value: undefined, disabled: false },
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
      // rlID: {
      //   title: 'ID',
      //   filter: false,
      // },
      rl_code: {
        title: 'Código',
        filter: false,
      },
      rl_name: {
        title: 'Nombre',
        filter: false,
      },
      rl_creationUser: {
        title: 'Creado por',
        filter: false,
      },
      rl_creationDate: {
        title: 'Fecha creación',
        filter: false,
        valuePrepareFunction: (resp) => {
          return moment(resp).format('YYYY-MM-DD');
        }
      },
      rl_modificationUser: {
        title: 'Modificado por',
        filter: false,
      },
      rl_modificationDate: {
        title: 'Fecha modificación',
        filter: false,
        valuePrepareFunction: (resp) => {
          return moment(resp).format('YYYY-MM-DD');
        }
      },
      rl_status: {
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

}
