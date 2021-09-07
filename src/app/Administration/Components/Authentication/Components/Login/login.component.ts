import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { DocumentType } from '../../../../../Commons/Entities/documentType';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Result } from '../../../../../Commons/Classes/result';
import { CustomValidators } from '../../../../../Commons/Classes/customValidators';
import { GetDocumentTypesIn } from '../../../../../Commons/MethodParameters/getDocumentTypesIn';
import { CommonService } from '../../../../../Commons/Services/common.service';
import { TranslateService } from '@ngx-translate/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { LoginIn } from '../../MethodParameters/LoginIn';
import { UserService } from '../../../User/Services/user.service';
import { GetUserIn } from '../../../User/MethodParameters/getUserIn';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  login: LoginIn;
  showLoader = false;
  fieldValidation = false;
  documentTypesList: Array<DocumentType>;
  loginForm: FormGroup;
  hasError = false;
  userInfo: any;

  constructor(
    private authenticationService: AuthenticationService,
    private routes: Router,
    private formBuilder: FormBuilder,
    private commonService: CommonService,
    private translateService: TranslateService,
    private userService: UserService) {

    this.login = new LoginIn();
  }

  ngOnInit() {
    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    //this.getDocumentTypes();
    this.loginForm = this.LoginForm();
    //TODO>Borrar linea
    // this.goDashboard();
  }

  getDocumentTypes() {
    this.showLoader = true;
    this.commonService.getDocumentTypes(new GetDocumentTypesIn())
      .subscribe(response => {
        if (response.result === Result.Success) {
          this.documentTypesList = response.documentTypes;
        } else {
          this.messages.showMessages('administration.authentication.login.documentTypes.error.messageError', 'ERROR');
        }
        this.showLoader = false;
      });
  }

  LoginForm(): FormGroup {
    const form = this.formBuilder.group({
      // usr_type: [
      //   {
      //     value: undefined,
      //     disabled: false
      //   },
      //   [
      //     Validators.required,
      //     Validators.nullValidator,
      //     CustomValidators.IsNullorEmpty,
      //   ]
      // ],
      user: [
        {
          value: undefined,
          disabled: false
        },
        [
          Validators.required,
          Validators.nullValidator,
          CustomValidators.IsNullorEmpty
        ]
      ],
      password: [
        {
          value: undefined,
          disabled: false
        },
        [
          Validators.required,
          Validators.nullValidator,
          CustomValidators.IsNullorEmpty

        ]
      ]
    });
    return form;
  }

  onLoggedIn() {
    this.hasError = false;
    this.showLoader = true;
    if (this.loginForm.valid) {
      this.login.usr_userName = this.loginForm.controls.user.value;
      this.login.usr_password = this.loginForm.controls.password.value;
      // this.login.usr_type = this.loginForm.controls.usr_type.value;

      this.authenticationService.login(this.login).subscribe(response => {
        if (response.result === Result.Success) {
          localStorage.setItem('sesId_adm', response.sessionId);
          localStorage.setItem('user_adm', JSON.stringify(response.user));

          let userIn: GetUserIn = new GetUserIn();
          userIn.usr_userName = response.user.usr_userName;
          this.userService.getUser(userIn).subscribe(resp => {
            if (resp.result === Result.Success) {
              localStorage.setItem('user_info', JSON.stringify(resp.resultGetUser));
            }
          });

          if (response.user.FirstLogin) {
            this.goChangePasword();
          } else {
            this.goDashboard();
          }

        } else if (response.result === Result.UserBlocked) {
          this.messages.showMessages('administration.authentication.login.error.messageUserBlocked', 'ERROR');
        } else {
          this.messages.showMessages('administration.authentication.login.error.messageInvalidData', 'ERROR');
        }
        this.showLoader = false;
      });
    } else {
      this.hasError = true;
      this.showLoader = false;

    }
    localStorage.setItem('isLoggedin', 'true');
  }

  onWindowsLoggedIn() {
    this.authenticationService.login(this.login).subscribe(response => {
      if (response.result === Result.Success) {

        localStorage.setItem('sesId_adm', response.sessionId);
        localStorage.setItem('user_adm', JSON.stringify(response.user));

        let userIn: GetUserIn = new GetUserIn();
        userIn.usr_userName = response.user.usr_userName;
        this.userService.getUser(userIn).subscribe(resp => {
          if (resp.result === Result.Success) {
            localStorage.setItem('user_info', JSON.stringify(resp.resultGetUser));
          }
        });

        if (response.user.FirstLogin) {
          this.goChangePasword();
        } else {
          this.goDashboard();
        }


      } else if (response.result === Result.UserBlocked) {
        this.messages.showMessages('administration.authentication.login.error.messageUserBlocked', 'ERROR');
      } else {
        this.messages.showMessages('administration.authentication.login.error.messageInvalidData', 'ERROR');
      }
      this.showLoader = false;
    });
    localStorage.setItem('isLoggedin', 'true');
  }

  goDashboard() {
    this.routes.navigate(['Home']);
  }

  goChangePasword() {
    localStorage.setItem('IslogToChangePassword', "True");
    this.routes.navigate(['ChangePassword', 'logged']);
  }

  forgotPassword() {
    this.routes.navigate(['ResetPassword']);
  }

}
