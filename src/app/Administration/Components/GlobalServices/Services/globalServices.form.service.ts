import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import { CurrencyPipe } from '@angular/common';
import { CurrencyFormatPipe } from '../../../../Shared/Pipes/currencyFormatPipe';
import { TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class GlobalServicesFormsService {
  currecyConfig = environment.currencyConfig;
  
  constructor(private formBuilder: FormBuilder, private currencyPipe: CurrencyFormatPipe, private translateService: TranslateService) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      id: [{ value: undefined, disabled: false }, []],
      servicesName: [{ value: undefined, disabled: true }, []],
      amounMin: [{ value: undefined, disabled: false }, [Validators.required]],
      stateServices: [{ value: undefined, disabled: false }, []],
    });
  }

  getConfigDataTable() {   
    const settings = {
      actions: {
        add: true,
        edit: true,
        copy: false,
        delete: false,
        position: 'left',
        columnTitle: '',
      },
      hideSubHeader: true,
      mode: 'external',
      edit: {
        editButtonContent: '<i class="ti-pencil text-info m-r-10"></i>',
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
      serID: {
        title: 'generalServices.grid.columnsName.id',
        filter: false,
      },
      ser_name: {
        title: 'generalServices.grid.columnsName.servicesName',
        filter: false,
      },      
      ser_status: {
        title: 'generalServices.grid.columnsName.state',
        valuePrepareFunction: ser_status => {
          let status = '';
          if(ser_status == 'V')status = this.translateService.instant('generalServices.grid.columnsName.stateActive');  
          if(ser_status == 'N')status = this.translateService.instant('generalServices.grid.columnsName.stateInactive');
          return status;
        },
        filter: false,        
      },     
      ser_max_amount: {
        title: 'generalServices.grid.columnsName.minAmount',
        valuePrepareFunction: ser_max_amount => {
            return (this.currencyPipe.transform(ser_max_amount, this.currecyConfig , '.', ',', 2, 16));
        },
        filter: false,
      }
    };
    (<any>settings).columns = columns;
    return settings;
  }

 

}


