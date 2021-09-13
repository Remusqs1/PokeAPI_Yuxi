import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class DevCellFormsService {
    constructor(private formBuilder: FormBuilder) { }

    getDevCellsForm(): FormGroup {
        return this.formBuilder.group({
            developCell: [{ value: undefined, disabled: false }, []],
        });
    }

    getDevCellsConfigDataTable() {

        const settings = {
            actions: {
                custom: [
                    {
                        name: 'edit',
                        icon: '<i class="ti-pencil text-credi m-r-10"></i>',
                        title: "editar"
                    }
                ],
                add: false,
                edit: false,
                copy: false,
                delete: false,
                position: 'left',
                columnTitle: '',
            },
            hideSubHeader: true,
            mode: 'external',
        };

        const columns: any = {
            developCell: {
                title: 'Nombre de célula',
                filter: false
            }
        };
        (<any>settings).columns = columns;
        return settings;
    }
}