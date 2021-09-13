import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { DocumentType } from '../../../../../Commons/Entities/documentType';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Result } from '../../../../../Commons/Classes/result';
import { CommonService } from '../../../../../Commons/Services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';

import { AuthenticationService } from '../../Services/authentication.service';
import { CustomValidators } from '../../../../../Commons/Classes/customValidators';
import { ForgotPasswordIn } from '../../MethodParameters/forgotPasswordIn';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  resetPassword: ForgotPasswordIn;
  showLoader = false;
  fieldValidation = false;
  documentTypesList: Array<DocumentType>;
  resetForm: FormGroup;
  hasError = false;

  constructor(private authenticationService: AuthenticationService,
    private routes: Router,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private translateService: TranslateService) {
    this.resetPassword = new ForgotPasswordIn();
  }

  ngOnInit() {
    this.resetForm = this.ForgotPasswordForm();
  }

  ForgotPasswordForm(): FormGroup {
    const form = this.formBuilder.group({
      usr_email: [
        {
          value: undefined,
          disabled: false
        },
        [
          Validators.required,
          Validators.nullValidator,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'),
          CustomValidators.IsNullorEmpty

        ]
      ]
    });
    return form;
  }

  forgotPassword() {
    this.hasError = false;
    this.showLoader = true;
    console.log('resetForm', this.resetForm.valid);
    if (this.resetForm.valid) {
      this.resetPassword.usr_email = this.resetForm.controls.usr_email.value;

      // this.authenticationService.resetPassword(this.resetPassword).subscribe(response => {
      //   console.log('response', response);
      //   if (response.result === Result.Success) {
      //     this.messages.showMessages('administration.authentication.forgot-password.success.messageInvalidData', 'SUCCESS');
      //     setTimeout(() => {
      //       this.backLogin();
      //     }, 5000);

      //   } else if (response.result === 4) {
      //     this.messages.showMessages('administration.authentication.forgot-password.error.messageInvalidData', 'ERROR');
      //   }
      //   this.showLoader = false;
      // });
    } else {
      this.hasError = true;
      this.showLoader = false;

    }

  }

  backLogin() {

    this.routes.navigate(['Authentication']);

  }

}
