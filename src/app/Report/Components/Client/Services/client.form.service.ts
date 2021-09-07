import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';

@Injectable({
  providedIn: 'root'
})
export class ClientFormService {

  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      documentNumber: [{ value: undefined, disabled: false }, []]
    });
  }

  getConfigDataTable() {

    const settings = {
      actions: {
        add: false,
        edit: false,
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
      proID: {
        title: 'client.grid.columnsName.idNumber',
        filter: false
      },
      pro_name: {
        title: 'client.grid.columnsName.campainNumber',
        filter: false
      },
      pro_modification_date: {
        title: 'client.grid.columnsName.documentName',
        filter: false
      },
      pro_status: {
        title: 'client.grid.columnsName.statusOffer',
        filter: false
      },
      pro_creation_date: {
        title: 'client.grid.columnsName.statusDate',
        filter: false
      }

    };
    (<any>settings).columns = columns;
    return settings;
  }

}
