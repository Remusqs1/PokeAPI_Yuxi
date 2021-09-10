import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Result } from '../../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { AuthenticationFormService } from '../../Services/authentication.form.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html'
})

export class RegisterComponent implements OnInit {
    @ViewChild('messages', { static: false }) messages: MessagesComponent;

    registerForm: FormGroup;
    hasError = false;
    showLoader = false;

    constructor(private authenticationFormService: AuthenticationFormService) { }

    ngOnInit() {
        this.registerForm = this.authenticationFormService.getRegisterForm();
    }

    register() {
        //TODO crear usuario
        if (this.registerForm.valid) {
            console.log("Valid");
        }
        else {
            console.log("Invalid");
            this.hasError = true;
        }
    }

}
