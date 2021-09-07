import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';

@Injectable({
    providedIn: 'root'
})
export class PlanamortizacionFormService {
    constructor(
        private formBuilder: FormBuilder,
        private statusPipe: StatusPipe
    ) { }


    getSearchAccounts(): FormGroup {
        return this.formBuilder.group({
            documentTypeGcDdl: [, [Validators.required]],
            //productTypeGcDdl: [, [Validators.required]],
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