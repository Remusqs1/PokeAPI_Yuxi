import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';
@Injectable()
export class CampaignFormsService {

    constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

    getFilterForm(): FormGroup {
        return this.formBuilder.group({
            campaignName: [{ value: undefined, disabled: false }, []],
            campaignState: [{ value: undefined, disabled: false }, []],
        });
    }

    getCreateForm(): FormGroup {
        const form = this.formBuilder.group({
            create_cam_name: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            create_cam_code: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            create_cam_code_entity: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            create_cam_sales_force: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            create_cam_star_date: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            create_cam_end_date: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            create_cam_closing_date: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            create_cam_status: [{ value: undefined, disabled: false },
            [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]]
        });
        return form;
    }

    getEditForm(): FormGroup {
        const form = this.formBuilder.group({
            edit_cam_name: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            edit_cam_code: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            edit_cam_code_entity: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20), CustomValidators.Numeric]],
            edit_cam_sales_force: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            edit_cam_star_date: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            edit_cam_end_date: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            edit_cam_closing_date: [{ value: undefined, disabled: false },
            [Validators.required, CustomValidators.MaxLength(20)]],
            edit_cam_status: [{ value: undefined, disabled: false },
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
                confirmDelete: true,
            }
        };

        const columns: any = {
            // cam_name_campaign: {
            //     title: 'campaign.grid.columnsName.name',
            //     filter: false
            // },
            // cam_status: {
            //     title: 'campaign.grid.columnsName.state',
            //     filter: false,
            //     valuePrepareFunction: (pro_status) => {
            //         return this.statusPipe.transform(pro_status);
            //     }
            // }
            Credit: {
                title: 'Número de crédito',
                filter: false
            },
            Company: {
                title: 'Compañía',
                filter: false
            }
        };
        (<any>settings).columns = columns;
        return settings;
    }

}
