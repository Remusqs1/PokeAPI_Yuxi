import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';

@Injectable({
    providedIn: 'root'
})
export class CertificatenolinkFormService {
    constructor(
        private formBuilder: FormBuilder,
        private statusPipe: StatusPipe
    ) { }


    getSearchFileNoLink(): FormGroup {
        return this.formBuilder.group({
            labelProducyType: [ { value: '', disabled: false }, ],
            selectProducts: [, [Validators.required]],
            documentTypeGcDdl: [, [Validators.required]],
            nameClient: [],
            emailClient: [, [Validators.required]],
            clientDocument: [
                { value: '', disabled: false },
                [
                    Validators.required,
                    Validators.pattern('^[0-9]*$'),
                    Validators.minLength(5),
                    Validators.maxLength(15),
                ],
            ],
        });
    }


}