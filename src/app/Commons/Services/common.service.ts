import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Injectable()
export class CommonService {
  constructor(private formBuilder: FormBuilder) { }

  getSearchForm(): FormGroup {
    return this.formBuilder.group({
      searchPokemon: [{ value: undefined, disabled: false }, []],
    });
  }

}
