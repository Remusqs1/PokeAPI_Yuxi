import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from '../../Commons/Classes/customValidators';
import { StatusPipe } from '../../Shared/Pipes/statusPipe';
import * as moment from 'moment';
import { CatalogsForm } from '../MethoParameters/catalogsForm';

@Injectable({
  providedIn: 'root'
})
export class CatalogsFormService {

  constructor(private formBuilder: FormBuilder, private statusPipe: StatusPipe) { }

  getFilterForm(): FormGroup {
    return this.formBuilder.group({
      Code: [{ value: '', disabled: false }, [Validators.required]],
      Value: [{ value: '', disabled: false }, [Validators.required]],
      CodeDepartment: [{ value: '', disabled: false }, [Validators.required]],
      Description: [{ value: '', disabled: false }, [Validators.required]],
      DepartamentId: [{ value: '', disabled: false }, [Validators.required]],
      DaneCode: [{ value: '', disabled: false }, [Validators.required]],
      CountryId: [{ value: '', disabled: false }, [Validators.required]],
      Name: [{ value: '', disabled: false }, [Validators.required]],
      ShortDescription: [{ value: '', disabled: false }, [Validators.required]],
      Detalle: [{ value: '', disabled: false }, [Validators.required]],
      TablaBizagi: [{ value: '', disabled: false }, [Validators.required]],
      Department: [{ value: '', disabled: false }, [Validators.required]],
    });
  }
  toFormGroup(controls: CatalogsForm<string>[] ) {
    const group: any = {};

    controls.forEach(control => {
      group[control.key] = control.required ? new FormControl(control.value || '', Validators.required)
                                              : new FormControl(control.value || '');
    });
    return new FormGroup(group);
  }
}
