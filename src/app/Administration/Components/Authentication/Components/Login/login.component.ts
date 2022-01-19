import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { AuthenticationFormService } from '../../Services/authentication.form.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  hasError = false;
  showLoader = false;

  constructor(
    private authenticationFormService: AuthenticationFormService,
    private routes: Router,) {
  }

  ngOnInit() {
    this.loginForm = this.authenticationFormService.getLoginForm();
  }


  onLoggedIn() {
    this.hasError = false;
    this.showLoader = true;
    if (this.loginForm.valid) {
        //LocalStorage
        this.goDashboard();
    } else {
        this.hasError = true;
        this.showLoader = false;
      }
  }

  goDashboard() {
    this.routes.navigate(['Home']);
  }

  goRegister() {
    this.routes.navigate(['Register']);
  }

}
