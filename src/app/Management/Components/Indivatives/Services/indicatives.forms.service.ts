import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
@Injectable()
export class IndicativesFormsService {

    constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

    getIndicativesForm(): FormGroup {
        return this.formBuilder.group({
            projectName: [{ value: undefined, disabled: false }, []],
            developCell: [{ value: undefined, disabled: false }, []],
            status: [{ value: undefined, disabled: false }, []],
            requirementQuality: [{ value: undefined, disabled: false }, []],
            softwareQuality: [{ value: undefined, disabled: false }, []],
            bugChannels: [{ value: undefined, disabled: false }, []],
            bugIntegrations: [{ value: undefined, disabled: false }, []],
            bugBusSupport: [{ value: undefined, disabled: false }, []],
            bugCore: [{ value: undefined, disabled: false }, []],
            bugData: [{ value: undefined, disabled: false }, []],
            bugs: [{ value: undefined, disabled: false }, []],
            vulnerability: [{ value: undefined, disabled: false }, []],
            duplicated: [{ value: undefined, disabled: false }, []],
            automaticCover: [{ value: undefined, disabled: false }, []],
            reportQuality: [{ value: undefined, disabled: false }, []],
            bugEnvironment: [{ value: undefined, disabled: false }, []],
            ans: [{ value: undefined, disabled: false }, []],
            accomplishDevelop: [{ value: undefined, disabled: false }, []],
            internalAns: [{ value: undefined, disabled: false }, []],
            accomplishQA: [{ value: undefined, disabled: false }, []],
            startDate: [{ value: undefined, disabled: false }, []],
            endDate: [{ value: undefined, disabled: false }, []],
        });
    }

    getIndicativesConfigDataTable() {

        const settings = {
            actions: {
                custom: [
                    {
                        name: 'download',
                        icon: '<i class="ti-import text-credi m-r-10"></i>',
                        title: "Descargar"
                    },
                    {
                        name: 'view',
                        icon: '<i class="ti-eye text-credi m-r-10"></i>',
                        title: "Ver"
                    },
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
            projectName: {
                title: 'Nombre de proyecto',
                filter: false
            },
            developCell: {
                title: 'Nombre de célula',
                filter: false
            },
            status: {
                title: 'Estatus',
                filter: false
            }
        };
        (<any>settings).columns = columns;
        return settings;
    }

}
