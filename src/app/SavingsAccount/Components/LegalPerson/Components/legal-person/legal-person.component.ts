import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Client } from '../../../../../Commons/Entities/client';
import { LegalPersonIn } from '../../MethodParameters/legalPersonIn';
import { LegalPersonService } from '../../Services/legalPerson.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Result } from '../../../../../Commons/Classes/result';

@Component({
  selector: 'app-legal-person',
  templateUrl: './legal-person.component.html',
  styleUrls: ['./legal-person.component.css']
})
export class LegalPersonComponent implements OnInit {
  public legalPersonForm: FormGroup;
  public legalPersonIn: LegalPersonIn = new LegalPersonIn();
  public submitted = false;
  public documentTypes: any[];
  public languages: any[];

  constructor(
    private formBuilder: FormBuilder,
    private formService: LegalPersonService,
    private router: Router
  ) { }

  ngOnInit() {
    this.createForm();
    this.legalPersonIn = new LegalPersonIn();
    this.getDocumentTypes();
    this.getLanguages();
  }

  getDocumentTypes() {
    this.formService.getDocumentTypes().subscribe((response) => {
      this.documentTypes = response.listDocumetTypes;
    });
  }

  getLanguages() {
    this.formService.getLanguages().subscribe((response) => {
      this.languages = response.listLanguages;
    });
  }

  get clients(): FormArray {
    return this.legalPersonForm.get('clients') as FormArray;
  }

  addClient() {
    const client = this.createArrayClients();
    this.clients.push(client);
  }

  removeClient(index: number) {
    this.clients.removeAt(index);
  }

  createArrayClients() {
    return this.formBuilder.group({
      documentTypeId: [0, [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      documentNumber: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10),
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
      clientBankIdentifier: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10)]],
      companyName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]]
    });
  }

  createForm() {
    this.legalPersonForm = this.formBuilder.group({
      group: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      documentType: [0, [Validators.required, Validators.minLength(1), Validators.maxLength(1)]],
      document: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(10),
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
      firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      secondName: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      firstSurname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      secondSurname: ['', [Validators.minLength(3), Validators.maxLength(30)]],
      userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      mobilePhone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10),
        Validators.pattern('[3][0-9]{9}')]],
      phone: ['', [Validators.minLength(7), Validators.maxLength(7),
        Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')]],
      mail: ['', [Validators.required, Validators.maxLength(40), Validators.email]],
      language: [0, [Validators.maxLength(1)]],
      notification: ['false', [Validators.required, Validators.minLength(4), Validators.maxLength(5)]],
      clients: this.formBuilder.array([this.createArrayClients()], [Validators.required])
    });
  }

  get c() {
    return this.legalPersonForm.controls;
   }

   numbersOnly(event: any): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  lettersOnly(event: any) {
    const key = (event.which) ? event.which : event.keyCode;
    const tecla = String.fromCharCode(key).toLowerCase();
    const letras = 'áéíóúabcdefghijklmnñopqrstuvwxyz ';
    const especiales = '8-37-39-46';
    // tslint:disable-next-line:no-inferrable-types
    // tslint:disable-next-line:variable-name
    let tecla_especial = false;
    // tslint:disable-next-line:prefer-const
    for (let i of especiales) {
        if (key === especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) === -1 && !tecla_especial) {
        return false;
    }
  }

  onSubmit() {
    this.submitted = true;
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.legalPersonForm.value, null, 4));
    if (this.legalPersonForm.invalid) {
      return;
    }

    this.legalPersonIn.administratorDocumentTypeId = this.legalPersonForm.get('documentType').value;
    this.legalPersonIn.administratorDocumentNumber = this.legalPersonForm.get('document').value;
    this.legalPersonIn.administratorFirstName = this.legalPersonForm.get('firstName').value;
    this.legalPersonIn.administratorSecondName = this.legalPersonForm.get('secondName').value;
    this.legalPersonIn.administratorFirstSurname = this.legalPersonForm.get('firstSurname').value;
    this.legalPersonIn.administratorSecondSurname = this.legalPersonForm.get('secondSurname').value;
    this.legalPersonIn.administratorMobilePhone = this.legalPersonForm.get('mobilePhone').value;
    this.legalPersonIn.administratorPhone = this.legalPersonForm.get('phone').value;
    this.legalPersonIn.administratorMail = this.legalPersonForm.get('mail').value;
    this.legalPersonIn.administratorUserName = this.legalPersonForm.get('userName').value;
    this.legalPersonIn.groupName = this.legalPersonForm.get('group').value;
    this.legalPersonIn.userLanguage = this.legalPersonForm.get('language').value;
    this.legalPersonIn.hasSummaryNotification = this.legalPersonForm.get('notification').value;
    this.legalPersonIn.clients = this.legalPersonForm.get('clients').value;

    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.legalPersonIn, null, 4));

    this.formService.createLegalPerson(this.legalPersonIn).subscribe((response) => {
      switch (response.result) {
        case Result.Success:
          Swal.fire('Correcto', 'Operación: ' + response.operationResult + '<br>' +
                                'Rechazo' + response.rejectionResult + '<br>' +
                                'Mensaje: ' + response.messageResult + '<br>'
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
    this.legalPersonForm.reset();
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
