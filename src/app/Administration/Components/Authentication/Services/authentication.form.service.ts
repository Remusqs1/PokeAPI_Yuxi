import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';

@Injectable()
export class AuthenticationFormService {
  
  constructor(private formBuilder: FormBuilder) { }

  getLoginForm(): FormGroup {
    return this.formBuilder.group({
      user: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      psw: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]]
    });
  }
}


