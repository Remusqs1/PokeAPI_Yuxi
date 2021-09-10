import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../Services/authentication.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Result } from '../../../../../Commons/Classes/result';
import { CommonService } from '../../../../../Commons/Services/common.service';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { AuthenticationFormService } from '../../Services/authentication.form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  loginForm: FormGroup;
  hasError = false;
  showLoader = false;

  constructor(
    private authenticationService: AuthenticationService,
    private authenticationFormService: AuthenticationFormService,
    private routes: Router,
    private formBuilder: FormBuilder,
    private commonService: CommonService) {
  }

  ngOnInit() {
    this.loginForm = this.authenticationFormService.getLoginForm();
  }


  onLoggedIn() {
    this.hasError = false;
    this.showLoader = true;
    // if (this.loginForm.valid) {
      //   this.login.usr_userName = this.loginForm.controls.user.value;
      //   this.login.usr_password = this.loginForm.controls.password.value;
      //   // this.login.usr_type = this.loginForm.controls.usr_type.value;

      //   this.authenticationService.login(this.login).subscribe(response => {
        //     if (response.result === Result.Success) {
          //       localStorage.setItem('sesId_adm', response.sessionId);
          //       localStorage.setItem('user_adm', JSON.stringify(response.user));

          //       let userIn: GetUserIn = new GetUserIn();
    //       userIn.usr_userName = response.user.usr_userName;
    //       this.userService.getUser(userIn).subscribe(resp => {
      //         if (resp.result === Result.Success) {
        //           localStorage.setItem('user_info', JSON.stringify(resp.resultGetUser));
    //         }
    //       });
    
    //       if (response.user.FirstLogin) {
    //         this.goChangePasword();
    //       } else {
    //         this.goDashboard();
    //       }

    //     } else if (response.result === Result.UserBlocked) {
      //       this.messages.showMessages('administration.authentication.login.error.messageUserBlocked', 'ERROR');
    //     } else {
      //       this.messages.showMessages('administration.authentication.login.error.messageInvalidData', 'ERROR');
    //     }
    //     this.showLoader = false;
    //   });
    // } else {
      //   this.hasError = true;
      //   this.showLoader = false;
      
      // }
      this.goDashboard(); //
      localStorage.setItem('isLoggedin', 'true');
  }

  goDashboard() {
    this.routes.navigate(['Home']);
  }

  goChangePasword() {
    console.log("ChangePassword");
    // localStorage.setItem('IslogToChangePassword', "True");
    // this.routes.navigate(['ChangePassword', 'logged']);
  }

  goForgotPassword() {
    console.log("ResetPassword");
    // this.routes.navigate(['ResetPassword']);
  }

  goRegister() {
    this.routes.navigate(['Register']);
  }

}
