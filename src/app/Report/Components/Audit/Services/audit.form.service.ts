import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AuditFormService {

  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      startDate: [{ value: undefined, disabled: false }, [Validators.required]],
      endDate: [{ value: undefined, disabled: false }, [Validators.required]]
    });
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
      audID: {
        title: 'report.grid.columnsName.audId',
        filter: false
      },
      aut_user:{
        title: 'report.grid.columnsName.audUser',
        filter: false
      },
      aud_transaction: {
        title: 'report.grid.columnsName.Transaction',
        filter: false
      },
      aud_table: {
        title: 'report.grid.columnsName.Table',
        filter: false
      },
      aut_status:{
        title: 'report.grid.columnsName.Status',
        filter: false
      },
      aut_ip: {
        title: 'report.grid.columnsName.Ip',
        filter: false
      },
      aut_date: {
        title: 'report.grid.columnsName.Date',
        filter: false,
        valuePrepareFunction: (resp) => {
          return moment(resp).format('YYYY-MM-DD');
        }
      }
    };
    (<any>settings).columns = columns;
    return settings;
  }
}
