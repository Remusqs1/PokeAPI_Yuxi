import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { isNumber } from 'util';

export class CustomValidators {

  static IsNullorEmpty(control: AbstractControl) {
    if (
      control.value === null ||
      control.value === undefined ||
      control.value === 'undefined' ||
      control.value === ''
    ) {
      // control.setValue(undefined);
      return { required: true };
    } else {
      return null;
    }
  }

  static EmailFormat(control: AbstractControl) {
    if (control.value === null || control.value === undefined || control.value === '') {
      return null;
    }
    if (!(/(([^<>()[\]\.,;:\s@\']+(\.[^<>()[\]\.,;:\s@\']+)*)|(\'.+\'))@(([^<>()[\]\.,;:\s@\']+\.)+[^<>()[\]\.,;:\s@\']{2,})$/
      .test(control.value))) {
      return { requiredEmailFormat: true };
    }
  }

}
