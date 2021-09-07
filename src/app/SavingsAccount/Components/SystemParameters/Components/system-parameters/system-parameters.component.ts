import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Result } from '../../../../../Commons/Classes/result';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { EditParametersIn } from '../../MethodParameters/editParametersIn';
import { SystemParametersService } from '../../Services/system-parameters.service';

@Component({
  selector: 'app-system-parameters',
  templateUrl: './system-parameters.component.html',
  styleUrls: ['./system-parameters.component.css']
})
export class SystemParametersComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  public parametersForm: FormGroup;
  public editParametersIn: EditParametersIn = new EditParametersIn();
  public parameters: any[];
  public editModalAceptText = 'Editar';
  public editModalCloseText = 'Cerrar';
  public editModalTitle = 'Editar parámetro';
  public valueParameter = '';

  constructor(
    private formBuilder: FormBuilder,
    private formService: SystemParametersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getParameters();
    this.editParametersIn = new EditParametersIn();
    this.createForm('', '');
  }

  openCreateUserModal(id: string, value: string) {
    console.log(id);
    this.valueParameter = value;
    this.createForm(id, value);
    this.editModal.open();
  }

  closeEdit() {
    this.reset();
  }

  editParameter() {
    if (this.parametersForm.invalid) {
      return;
    }
    this.editParametersIn.Id = this.parametersForm.get('id').value;
    this.editParametersIn.Value = this.parametersForm.get('value').value;
    this.formService.updateParameter(this.editParametersIn).subscribe((response) => {
      switch (response.result) {
        case Result.Success:
          Swal.fire('Correcto', 'Operación exitosa', 'success');
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

    this.editModal.closeModal();
    this.reset();
  }

  reset() {
    this.parametersForm.reset();
    this.ngOnInit();
  }

  createForm(id: string, value: string) {
    this.parametersForm = this.formBuilder.group({
      id: [id, [Validators.required]],
      value: [value, [Validators.required, Validators.maxLength(500)]]
    });
  }

  get c() {
    return this.parametersForm.controls;
   }

  getParameters() {
    this.formService.getParameters().subscribe((response) => {
      this.parameters = response.parameters;
    });
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
