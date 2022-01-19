import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Injectable } from '@angular/core';
import { CustomValidators } from '../../../../Commons/Classes/customValidators';

@Injectable()
export class AuthenticationFormService {
  
  constructor(private formBuilder: FormBuilder) { }

  getLoginForm(): FormGroup {
    return this.formBuilder.group({
      email: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty, CustomValidators.EmailFormat]],
      psw: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]]
    });
  }

  getRegisterForm(): FormGroup {
    return this.formBuilder.group({
      name: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      email: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty, CustomValidators.EmailFormat]],
      psw: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]],
      confirmPsw: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator, CustomValidators.IsNullorEmpty]]
    });
  }
}


