import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { CreateUserIn } from '../../MethodParameters/createUserIn';
import { AuthenticationFormService } from '../../Services/authentication.form.service';
import { AuthenticationService } from '../../Services/authentication.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    @ViewChild('messages', { static: false }) messages: MessagesComponent;

    registerForm: FormGroup;
    hasError = false;
    showLoader = false;

    constructor(private authenticationFormService: AuthenticationFormService, private authenticationService : AuthenticationService,
                private routes: Router) { }

    ngOnInit() {
        this.registerForm = this.authenticationFormService.getRegisterForm();
    }

    register() {
        if (this.registerForm.valid) {
            let createUser = new CreateUserIn();
            createUser.usr_email = this.registerForm.get('email').value;
            createUser.usr_name = this.registerForm.get('name').value;
            createUser.usr_psw = this.registerForm.get('psw').value;

            this.authenticationService.createUser(createUser).subscribe(response => {
                if (response.result === Result.Success) {
                    this.messages.showMessages("Usuario creado correctamente", "SUCCESS");
                    setTimeout(() => {
                        this.routes.navigate(['']);
                    }, 5000);
                }
                else{
                    this.messages.showMessages("Error al crear usuario", "ERROR");
                }
            });
        }
        else {
            this.hasError = true;
        }
    }

}
