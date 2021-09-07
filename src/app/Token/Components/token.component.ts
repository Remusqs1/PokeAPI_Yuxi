import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from '../../Commons/Classes/customValidators';
import { ValidateTokenIn } from '../MethodParameters/validateTokenIn';
import { TokenService } from '../Service/token.service';
import { Result } from '../../Commons/Classes/result';


@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css'],
})
export class TokenComponent implements OnInit {
  msg = '';
  tokenForm: FormGroup;
  hasError;
  constructor(private formBuilder: FormBuilder, private tokenServices: TokenService) { }

  ngOnInit() {
    this.tokenForm = this.LoginForm();
  }

  LoginForm(): FormGroup {
    const form = this.formBuilder.group({
      token: [
        {
          value: undefined,
          disabled: false
        },
        [
          Validators.required,
          Validators.nullValidator,
          CustomValidators.IsNullorEmpty,
        ]
      ],     
    });
    return form;
  }

  validateToken(){
      let validateTokenIn = new ValidateTokenIn();
      validateTokenIn.token = this.tokenForm.controls.token.value;
      this.tokenServices.validateToken(validateTokenIn).subscribe( resp => {
          if(resp.result == Result.Success){
              //Redirecciona
          } else {
              alert('Token invalido');
          }
      })

  }
}
