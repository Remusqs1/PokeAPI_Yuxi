import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../../../Commons/Entities/user';
import { AuthenticationFormService } from '../../Services/authentication.form.service';
@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    hasError = false;
    showLoader = false;
    regex = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,18}$/); //1 mayúscula, 1 minuscula, 1 número, 1 caracter especial, entre 8 y 18 de longitud
    invalidPasswordCharacters = false;
    
    constructor(private authenticationFormService: AuthenticationFormService,
                private routes: Router) { }

    ngOnInit() {
        this.registerForm = this.authenticationFormService.getRegisterForm();

        this.registerForm.get('confirmPsw').valueChanges.subscribe(value => {
            this.comparePasswords();
        });
        this.registerForm.get('psw').valueChanges.subscribe(value => {
            this.comparePasswords();
        });
    }

    ngAfterViewInit(): void {
        this.invalidPasswordCharacters = false;
        this.registerForm.get('psw').valueChanges.subscribe(value => {
            if (this.regex.test(value)) {
                this.invalidPasswordCharacters = false;
            }
            else {
                this.invalidPasswordCharacters = true;
            }
        });
    }

    register() {
        this.hasError = false;
        if (this.registerForm.valid) {

            //LocalStorage
            let user = new User();
            user.usr_userName = this.registerForm.get("name").value;
            user.usr_email = this.registerForm.get("email").value;
            let userJson = JSON.stringify(user);
            localStorage.setItem("user", userJson);
            this.routes.navigate(['Home']);
        }
        else {
            this.hasError = true;
        }
    }

    goLogin() {
        this.routes.navigate(['']);
    }

    comparePasswords() {
        if (this.registerForm.get('confirmPsw').value === this.registerForm.get('psw').value) {
            this.registerForm.get('confirmPsw').setErrors(null);
        }
        else {
            this.registerForm.get('confirmPsw').setErrors({ 'comparePswError': true });
        }
    }

}