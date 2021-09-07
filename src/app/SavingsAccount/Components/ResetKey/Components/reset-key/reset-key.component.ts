import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Result } from '../../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ResetKeyIn } from '../../MethodParameters/resetKeyIn';
import { ResetKeyService } from '../../Services/reset-key.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-key',
  templateUrl: './reset-key.component.html',
  styleUrls: ['./reset-key.component.css']
})
export class ResetKeyComponent implements OnInit {  
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  public resetKeyForm: FormGroup;
  public submitted = false;
  public resetKeyIn: ResetKeyIn = new ResetKeyIn();
  public documentTypes: any[];

  constructor(
    private formBuilder: FormBuilder,
    private formService: ResetKeyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.resetKeyIn = new ResetKeyIn();
    this.getDocumentTypes();
  }

  getDocumentTypes() {
    this.formService.getDocumentTypes().subscribe((response) => {
      this.documentTypes = response.listDocumentTypes;
    });
  }

  createForm() {
    this.resetKeyForm = this.formBuilder.group({
      documentType: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(2)]],
      documentNumber: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      cardNumber: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(19)]]
    });
  }

  get c() {
    return this.resetKeyForm.controls;
   }

   numbersOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  onSubmit() {
    this.submitted = true;
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetKeyForm.value, null, 4));
    if (this.resetKeyForm.invalid) {
      return;
    }

    this.resetKeyIn.TypeDocument = this.resetKeyForm.get('documentType').value;
    this.resetKeyIn.DocumentNumber = this.resetKeyForm.get('documentNumber').value;
    this.resetKeyIn.CardNumber = this.resetKeyForm.get('cardNumber').value;

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetKeyIn, null, 4));

    this.formService.resetKey(this.resetKeyIn).subscribe((response) => {
      switch (response.result) {
        case Result.Success:
          Swal.fire('Correcto', 'Código: ' + response.Code + '<br>' +
                                'Descripción' + response.Description + '<br>' +
                                'Número de autorización' + response.AuthorizationNumber + '<br>' +
                                'Fecha de autorización' + response.AuthorizationDate + '<br>' +
                                'Hora de autorización' + response.AuthorizationHour + '<br>'
          , 'success');
          break;
        case Result.InvalidSession:
          this.invalidSession();
          break;
        case Result.InvalidPermissionRole:
          Swal.fire('Error', 'No cuenta con los permisos para esta acción', 'warning');
          break;
        case Result.Error:
          Swal.fire('Error', response.message, 'error');
          break;
        case Result.GenericError:
          Swal.fire('Error', response.message, 'error');
          break;
        default:
          Swal.fire('Error', response.message, 'error');
          break;
        }
    }, (error) => {
      Swal.fire('Error', 'Ha ocurrido un error; para mayor información por favor revisar el log',
       'error');
    });
  }

  reset() {
    this.resetKeyForm.reset();
    this.submitted = false;
    this.ngOnInit();
  }

  invalidSession() {
    Swal.fire('Error', 'Su sessión ha caducado, ingrese de nuevo al sistema', 'error');
    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }

}
