import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { DocumentType } from '../../../../../Commons/Entities/documentType';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Result } from '../../../../../Commons/Classes/result';
import { CommonService } from '../../../../../Commons/Services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';

import { AuthenticationService } from '../../Services/authentication.service';
import { CustomValidators } from '../../../../../Commons/Classes/customValidators';
import { ChangePasswordIn } from '../../MethodParameters/changePasswordIn';
import { Observable } from 'rxjs';
import { CodeValidationIn } from '../../MethodParameters/codeValidationIn';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  changePassword: ChangePasswordIn;
  showLoader = false;
  fieldValidation = false;
  documentTypesList: Array<DocumentType>;
  resetpasswordForm: FormGroup;
  hasError = false;
  codeExistValidation: CodeValidationIn;
  id: any;
  isLogged: boolean = false;

  constructor(private authenticationService: AuthenticationService,
    private routes: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private translateService: TranslateService) {

    this.codeExistValidation = new CodeValidationIn();
    this.changePassword = new ChangePasswordIn();

  }

  ngOnInit() {
    this.resetpasswordForm = this.ChangePasswordForm();
    this.checkLogged();
  }

  ChangePasswordForm(): FormGroup {
    const form = this.formBuilder.group({
      usr_password1: [
        {
          value: undefined,
          disabled: false
        },
        [
          Validators.required,
          Validators.nullValidator,
          Validators.minLength(6),
          CustomValidators.IsNullorEmpty

        ]
      ],
      usr_password2: [
        {
          value: undefined,
          disabled: false
        },
        [
          Validators.required,
          Validators.nullValidator,
          Validators.minLength(6),
          CustomValidators.IsNullorEmpty

        ]
      ]
    });
    return form;
  }

  get pass1NoValido() {
    return this.resetpasswordForm.get('usr_password1').invalid && this.resetpasswordForm.get('usr_password1').touched
  }

  get pass2NoValido() {

    const pass1 = this.resetpasswordForm.get('usr_password1').value;
    const pass2 = this.resetpasswordForm.get('usr_password2').value;

    return (pass1 === pass2) ? false : true;

  }

  checkLogged() {
    // console.log(this.route.snapshot.paramMap.get('id'));
    // console.log(localStorage.getItem('isLoggedIn'));
    if (this.route.snapshot.paramMap.get('id') == 'logged' && localStorage.getItem('IslogToChangePassword') == "True") {
      // console.log("Trueeeee");
      this.isLogged = true;
      this.resetpasswordForm.addControl('usr_OldPassword', new FormControl({
        value: '',
        disabled: false
      },

        [
          Validators.required,
          Validators.nullValidator,
          // Validators.minLength(6),
          CustomValidators.IsNullorEmpty
        ]
      ));
    } else {
      // console.log("NOT Trueeeee");
      this.isLogged = false;


      this.resetpasswordForm.addControl('usc_code', new FormControl(
        {
          value: '',
          disabled: false
        },
        [
          Validators.required,
          Validators.nullValidator,
          CustomValidators.IsNullorEmpty
        ]
      ));
    }
  }


  onChangePassword() {

    // this.hasError = false;
    // this.showLoader = true;
    // console.log(this.resetpasswordForm);
    // if (this.resetpasswordForm.valid) {
    //   this.changePassword.usr_OldPassword = this.resetpasswordForm.controls.usr_OldPassword.value;
    //   this.changePassword.usr_password = this.resetpasswordForm.controls.usr_password1.value;
    //   if (!this.pass2NoValido) {
    //     this.authenticationService.changePassword(this.changePassword).subscribe((response) => {
    //       if (response.result == Result.Success) {
    //         this.messages.showMessages(response.message, 'SUCCESS');
    //         localStorage.clear();
    //         setTimeout(() => {
    //           this.routes.navigateByUrl('/');

    //         }, 3000);
    //       }
    //       else if (response.result == Result.NoRecords) {
    //         this.messages.showMessages(response.message, 'ERROR');
    //       }
    //       else if (response.result == Result.Error) {
    //         this.messages.showMessages(response.message, 'ERROR');
    //       }

    //     })
    //   }

    // } else {


    //   this.hasError = true;
    //   this.showLoader = false;

    // }


  }

  onResetPassword() {
    // this.hasError = false;
    // this.showLoader = true;
    // console.log('resetpasswordForm', this.resetpasswordForm.valid);
    // if (this.resetpasswordForm.valid) {
    //   this.changePassword.usr_code = this.route.snapshot.paramMap.get('id');
    //   this.changePassword.usc_code = this.resetpasswordForm.controls.usc_code.value;
    //   this.changePassword.usr_password = this.resetpasswordForm.controls.usr_password1.value;

    //   this.authenticationService.changePassword(this.changePassword).subscribe(response => {
    //     console.log('response', response);
    //     if (response.result === Result.Success) {
    //       this.goLogin();
    //     } else if (response.result === 3) {
    //       this.messages.showMessages('administration.authentication.change-password.messageInvalidData', 'ERROR');
    //     } else {
    //       this.messages.showMessages('administration.authentication.change-password.error.messageInvalidData', 'ERROR');
    //     }
    //     this.showLoader = false;
    //   });
    // } else {
    //   this.hasError = true;
    //   this.showLoader = false;

    // }

  }

  codeVerification() {

    // this.showLoader = true;
    // this.codeExistValidation.usr_code = this.route.snapshot.paramMap.get('id');
    // this.codeExistValidation.usc_code = this.resetpasswordForm.controls.usc_code.value;

    // if (this.codeExistValidation.usc_code.length == 8) {
    //   this.authenticationService.codeValidation(this.codeExistValidation).subscribe(response => {
    //     console.log('response', response);
    //     if (response.result === Result.Success) {

    //     } else if (response.result === 3) {
    //       this.messages.showMessages('administration.authentication.change-password.messageInvalidData', 'ERROR');
    //     } else {
    //       this.messages.showMessages('administration.authentication.change-password.error.messageInvalidData', 'ERROR');
    //     }
    //     this.showLoader = false;
    //   });
    // } else {
    //   this.messages.showMessages('administration.authentication.change-password.error.messageLenghtCode', 'ERROR');
    //   this.showLoader = false;
    // }

  }

  goToHome() {
    this.routes.navigateByUrl('Home');
  }

  goLogin() {

    this.messages.showMessages('administration.authentication.change-password.messageSuccess', 'SUCCESS');
    setTimeout(() => {
      this.routes.navigate(['Authentication']);
    }, 5000);

  }



}
