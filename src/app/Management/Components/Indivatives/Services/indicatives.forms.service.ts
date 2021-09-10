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
        });
    }



}
