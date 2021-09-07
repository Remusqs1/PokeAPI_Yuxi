import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import {CatalogsForm } from '../MethoParameters/catalogsForm';

@Component({
  selector: 'app-controls',
  templateUrl: './catalogsForms.component.html'
})
export class DynamicFormQuestionComponent {
  @Input() catalogs: CatalogsForm<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.catalogs.key].valid; }
}