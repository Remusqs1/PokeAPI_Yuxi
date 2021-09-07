import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
import * as moment from 'moment';

@Injectable({
    providedIn: 'root'
})
export class HomeConfigTableService {

    constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }
    createHomeConfigForm(): FormGroup {
        const homeConfigForm = this.formBuilder.group({
            OptionMenu: [,[Validators.required]],
            OrderOption:[,[Validators.required]],
            UserId:[,[Validators.required]],
            Icono:[,[Validators.required]],
            StateConfig:[, [Validators.required]]
        });
        return homeConfigForm;
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
            
            Id: {
                title: 'ID',
                filter: false,
            },
            OptionMenu: {
                title: 'Opción de Menu',
                filter: false,
                
            },
            Path: {
                title: 'Ruta',
                filter: false,
            },
            OrderOption: {
                title: 'Orden',
                filter: false,
            },
            UserId: {
                title: 'Id de usuario',
                filter: false,
                
            },
            ModificationDate: {
                title: 'Fecha modificación',
                filter: false,
                valuePrepareFunction: (resp) => {
                    return moment(resp).format('YYYY-MM-DD');
                  }
            },
            StateConfig: {
                title: 'Estado',
                filter: false,
                
            },
        };

        (<any>settings).columns = columns;
        return settings;
    }
}