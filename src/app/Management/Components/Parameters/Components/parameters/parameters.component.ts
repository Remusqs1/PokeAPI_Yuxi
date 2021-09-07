import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { EditParametersIn } from '../../MethodParameters/editParametersIn';
import { ParametersService } from '../../Services/parameters.service';
import Swal from 'sweetalert2';
import { Result } from '../../../../../Commons/Classes/result';
import { Router } from '@angular/router';
import { editParametersOut } from '../../MethodParameters/editParametersOut';
import { CreateParameterIn } from '../../MethodParameters/createParameterIn';
import { CreateParameterOut } from '../../MethodParameters/createParameterOut';


@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  public parametersForm: FormGroup;
  public editParametersIn: EditParametersIn = new EditParametersIn();
  public createParametersIn: CreateParameterIn;
  public parameters: any[];
  public editModalAceptText = 'Editar';
  public editModalCloseText = 'Cerrar';
  public editModalTitle = 'Editar parámetro';
  public valueParameter = '';
  public create: boolean;

  constructor(
    private formBuilder: FormBuilder,
    public formService: ParametersService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getParameters();
    this.editParametersIn = new EditParametersIn();
    this.create = true;
    this.editForm('', '');
  }

  openEditParameterModal(id: string, value: string) {
    this.create = false;
    // console.log(id);
    this.valueParameter = value;
    this.editForm(id, value);
    this.editModal.open();
  }

  closeEdit() {
    this.parametersForm.reset();

    this.resetForm();
  }

  AddParameter() {
    this.create = true;
    this.editForm('', '');;
    this.editModal.open();
  }
  editParameter() {

    let resposeService: any;
    if (this.parametersForm.invalid) {
      return;
    }

    const promise = new Promise((resolve, reject) => {
      if (this.create) {
        this.createParametersIn = new CreateParameterIn();
        this.createParametersIn.Id = this.parametersForm.get('id').value;
        this.createParametersIn.Value = this.parametersForm.get('values').value;
        this.createParametersIn.Description = this.parametersForm.get('desc').value;

        this.formService.createParameter(this.createParametersIn).subscribe((response) => {
          resolve(response);
        }, (error) => {
          reject(error);
        })

      } else {
        this.editParametersIn.Id = this.parametersForm.get('id').value;
        this.editParametersIn.Value = this.parametersForm.get('values').value;
        this.formService.updateParameter(this.editParametersIn).subscribe((response) => {

          resolve(response);
        }, (error) => {
          reject(error)
        });
      }
    });
    promise.then((responseServices: editParametersOut | CreateParameterOut) => {

      switch (responseServices.result) {
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
          Swal.fire('Error', responseServices.message, 'error');
          break;
        case Result.GenericError:
          Swal.fire('Error', responseServices.message, 'error');
          break;
        default:
          Swal.fire('Error', responseServices.message, 'error');
          break;
      }

      setTimeout(() => {
        this.editModal.closeModal();
        Swal.close();
        this.resetForm();
      }, 2000);

    }).catch((error) => {
      Swal.fire('Error', 'Ha ocurrido un error; para mayor información por favor revisar el log',
        'error');
    })











  }

  resetForm() {
    this.parametersForm.reset();
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

  editForm(id: string, values: string) {

    if (this.create) {
      this.parametersForm = this.formBuilder.group({
        id: [{ value: undefined, disabled: false }, [Validators.required, Validators.maxLength(20)]],
        values: [{ value: undefined, disabled: false }, [Validators.required, Validators.maxLength(50)]],
        desc: [{ value: undefined, disabled: false }, [Validators.required, Validators.maxLength(50)]]
      });
    } else {
      this.parametersForm = this.formBuilder.group({
        id: [{ value: id, disabled: true }, [Validators.required]],
        values: [{ value: values, disabled: false }, [Validators.required, Validators.maxLength(50)]],
        desc: [{ value: '', disabled: true, visible: false }, [Validators.required, Validators.maxLength(50)]]
      });
    }

  }

  createForm() {


    console.log("si entra");

  }

  get c() {
    return this.parametersForm.controls;
  }

  getParameters() {
    this.formService.getParameters().subscribe((response) => {
      this.parameters = response.parameters;
    });
  }

}
