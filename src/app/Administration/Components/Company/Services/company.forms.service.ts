import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';

@Injectable()
export class CompanyFormsService {

  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      filteruserDocumentType: [{ value: undefined, disabled: false }, []],
      filterDocumentNumber: [{ value: undefined, disabled: false }, []],
      filterName: [{ value: undefined, disabled: false }, []],
      filterState: [{ value: undefined, disabled: false }, []],
    });
  }

  getConfigDataTable() {
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
      doc_description: {
        title: 'company.grid.columnsName.documentType',
        filter: false,
      },
      com_num_doc: {
        title: 'company.grid.columnsName.documentNumber',
        filter: false,
      },
      com_name: {
        title: 'company.grid.columnsName.name',
        filter: false,
      },
      com_status: {
        title: 'company.grid.columnsName.state',
        filter: false,
        valuePrepareFunction: (com_status) => {
          return this.statusPipe.transform(com_status);
        }
      }
    };
    (<any>settings).columns = columns;
    return settings;
  }

}
