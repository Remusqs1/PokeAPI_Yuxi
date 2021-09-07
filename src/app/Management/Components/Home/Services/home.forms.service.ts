import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
@Injectable()
export class HomeFormsService {

    constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

    getFilterForm(): FormGroup {
        return this.formBuilder.group({
            homeName: [{ value: undefined, disabled: false }, []],
            homeState: [{ value: undefined, disabled: false }, []],
        });
    }

    getCreateForm(): FormGroup {
        const form = this.formBuilder.group({
            create_agree_name: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            create_agree_code: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            create_agree_document: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            create_agree_fee: [{ value: undefined, disabled: false },
            [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
            create_agree_status: [{ value: undefined, disabled: false },
            [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]]
        });
        return form;
    }

    getEditForm(): FormGroup {
        const form = this.formBuilder.group({
            edit_agree_name: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            edit_agree_code: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            edit_agree_document: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            edit_agree_fee: [{ value: undefined, disabled: false },
            [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
            edit_agree_status: [{ value: undefined, disabled: false },
            [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]]
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
                confirmDelete: true
            }
        };

        const columns: any = {
            agr_name: {
                title: 'home.grid.columnsName.name',
                filter: false,
            },
            agr_status: {
                title: 'home.grid.columnsName.state',
                filter: false,
                valuePrepareFunction: (pro_status) => {
                    return this.statusPipe.transform(pro_status);
                }
            }
        };
        (<any>settings).columns = columns;
        return settings;
    }

}
