import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { PostAccountAssociationIn } from '../../MethodParameters/PostAccountAssociationIn';
import {
  AccountByClient,
  InformacionCabAccountsSiifOut,
  RequestSavingsAccountClientSIIFOut,
} from '../../MethodParameters/RequestSavingsAccountClientSIIFOut';
import { InformacionCabSavingAccountSiif, RepeticionesSavingAccountSiif, RequestSavingsAccountClientSIIFIn } from '../../MethodParameters/RequestSavingsAccountClientSIIFIn';
import { AccountsByClient } from '../../MethodParameters/GetAccountsByClientOut';
import { GetRequestClientSiifIn, InformacionCab, Repeticiones } from '../../MethodParameters/GetRequestClientSiifIn';
import { AccountValidationIn } from '../../MethodParameters/SetAccountValidationIn';


import { LinkingAccountsService } from '../../Services/linking-accounts.service';
import { LinkingAccountsFormService } from '../../Services/linkingAccount.form.service';
import { InformacionCabClientSiifOut } from '../../MethodParameters/GetRequestClientSiifOut';
import { DocumentTypesGc, GetDocumentTypesOut } from '../../MethodParameters/GetDocumentTypesOut';
import { GetDocumentTypesIn } from '../../../../../Commons/MethodParameters/getDocumentTypesIn';
import { GetProductTypesSA } from '../../MethodParameters/GetProductTypesSA';
import { SpecialCharsPipe } from '../../../../../Shared/Pipes/SpecialCharsPipe';

@Component({
  selector: 'app-linking-accounts',
  templateUrl: './linking-accounts.component.html',
})
export class LinkingAccountsComponent implements OnInit {
  @ViewChild('editAccountModal', { static: false }) editAccountModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('messages', { static: false }) messages: MessagesComponent;


  public searchAccountsForm: FormGroup;
  public associateAccountForm: FormGroup;
  formBuidler: FormBuilder = new FormBuilder();
  public documentTypes: GetDocumentTypesOut = new GetDocumentTypesOut();
  public submittedSearch = false;
  public submittedAssociate = false;
  public postAccountAssociationIn: PostAccountAssociationIn = new PostAccountAssociationIn();
  public requestSavingsAccountClientSIIFIn: RequestSavingsAccountClientSIIFIn;

  getRequestClientSiifIn: GetRequestClientSiifIn;
  accountByClient: InformacionCabClientSiifOut = new InformacionCabClientSiifOut();
  selectedDocument: DocumentTypesGc;
  formEditAccount: FormGroup;
  tableSettings: any;
  public productTypes: GetProductTypesSA;
  totalRecords: number = 0;
  accountsByClient: any[] = [];
  linkAccountButton: boolean;
  legalPerson: Boolean = false;
  public clientInformation: InformacionCabClientSiifOut = new InformacionCabClientSiifOut();
  public clientInfoExist: any = {};
  private customerShortName: string;
  public transactionResult = {
    Transanccion: false,
    Nombre: "",
    Tipodeidentificacion: "",
    NumeroIdentificacion: "",
    NumeroCuenta: "",
    TipoProducto: "",
    ResultadoTransaccion: "",
  }




  editAccountModalAceptText: string =
    'savingAccounts.label.linkingAccountsModal.Acept';
  editAccountModalCloseText: string =
    'savingAccounts.label.linkingAccountsModal.Close';

  constructor(
    private linkingAccountService: LinkingAccountsService,
    private linkingAccountFormService: LinkingAccountsFormService,
    private router: Router
  ) { }

  ngOnInit() {
    this.tableSettings = this.linkingAccountFormService.getConfigDataTable();
    this.formEditAccount = this.linkingAccountFormService.getFormEditAccount();
    this.searchAccountsForm = this.linkingAccountFormService.getSearchAccounts();
    this.associateAccountForm = this.linkingAccountFormService.getFormAssociateAccount();
    this.GetDocumentTypes();
    this.GerProductTypesSA();
    this.linkAccountButton = true;


  }


  GerProductTypesSA() {
    this.linkingAccountService.getProductTypesSa().subscribe((responseProductsSA) => {
      this.productTypes = responseProductsSA;
    });
  }
  GetDocumentTypes() {
    this.linkingAccountService.getDocumentTypes().subscribe((response) => {
      if (response.result == Result.Success) {
        this.documentTypes.DocumentTypesGc = response.DocumentTypesGc;
        this.clientInfoExist.info = false;
        this.clientInfoExist.accounts = false;
      } else if (response.result == Result.Error) {

      } else if (response.result == Result.InvalidSession) {
        this.invalidSession();
      }

    });
  }

  validateAccount(value) {
    this.messages.closeMessage();
    let accountValidationIn = new AccountValidationIn();
    accountValidationIn.CustomerAccountNumber = value;
    accountValidationIn.CustomerIdentification = this.clientInformation.NumerodeIdentificacion;

    this.linkingAccountService.getAccountValidation(accountValidationIn)
      .subscribe((response) => {

        if (response.result === Result.Success) {
          this.linkAccountButton = false;
          this.messages.showMessages('savingAccounts.messages.linkingAccounts.cardAssociation.alreadyLinked', 'WARNING', true)
        } else
          if (response.result === Result.NoRecords) {
            this.linkAccountButton = true;
          }
      });

  }

  documentNumberValidation(event: KeyboardEvent) {


    if (/^[0-9]+$/.test(event.key) || event.key == "Backspace" || event.key == "v" || event.key == "V") {

      this.documentTypeValidation(this.searchAccountsForm);
    }
  }
  documentTypeValidation(ddlForm) {
    const documentType = ddlForm.value.documentTypeDdl;
    this.selectedDocument = this.documentTypes.DocumentTypesGc.filter(m => m.Code == documentType)[0];
    const pattern = (this.selectedDocument.isNumeric) ? '^[0-9]*$' : '^[aA-zA0-9]*$';
    this.associateAccountForm.reset();
    this.clientInfoExist.info = false;
    this.clientInfoExist.accounts = false;
    this.transactionResult.Transanccion = false;

    this.searchAccountsForm.controls['clientDocument'].setValidators([Validators.required, Validators.minLength(this.selectedDocument.minLength), Validators.maxLength(this.selectedDocument.maxLength), Validators.pattern(pattern)]);
    this.searchAccountsForm.controls['clientDocument'].updateValueAndValidity();
    console.log("Tipo de documento seleccionado", ddlForm);

    if (this.selectedDocument.Value == 'NIT') {
      this.associateAccountForm.addControl('legalPersonShortName', new FormControl(null, [Validators.required, Validators.maxLength(22), Validators.minLength(6), Validators.pattern('^[a-zA-Z0-9 _]*[a-zA-Z0-9][a-zA-Z0-9 _]*$')]));
      this.legalPerson = true;
    } else {
      this.legalPerson = false;
      this.associateAccountForm.removeControl('legalPersonShortName');
    }
  }

  searchClientInformation(formSubmit) {
    //########################################
    this.documentTypeValidation(formSubmit);

    if (formSubmit.valid) {

      this.getRequestClientSiifIn = new GetRequestClientSiifIn();
      this.getRequestClientSiifIn.Repeticiones = new Repeticiones();
      this.getRequestClientSiifIn.InformacionCab = new InformacionCab();
      this.getRequestClientSiifIn.InformacionCab.NUMERODEIDENTIFICACION = formSubmit.value.clientDocument;


      this.linkingAccountService.getClientInformationSiif(this.getRequestClientSiifIn)
        .subscribe((response) => {
          if (response.result === Result.Success) {
            if (response.GetRequestClientSiif.InformacionCab != null) {

              this.clientInformation = <InformacionCabClientSiifOut>response.GetRequestClientSiif.InformacionCab;
              //console.log("customerShortName", this.customerShortName);


              this.requestSavingsAccountClientSIIFIn = new RequestSavingsAccountClientSIIFIn();
              this.requestSavingsAccountClientSIIFIn.InformacionCab = new InformacionCabSavingAccountSiif();
              this.requestSavingsAccountClientSIIFIn.Repeticiones = new RepeticionesSavingAccountSiif();
              this.requestSavingsAccountClientSIIFIn.InformacionCab.NumerodeIdentificacion = formSubmit.value.clientDocument;
              this.requestSavingsAccountClientSIIFIn.InformacionCab.TipodeIdentificacion = formSubmit.value.documentTypeDdl;
              // this.requestSavingsAccountClientSIIFIn.InformacionCab.TipodeIdentificacion = response.GetRequestClientSiif.InformacionCab.TipoId;

              this.linkingAccountService.getAccountsByClient(this.requestSavingsAccountClientSIIFIn).subscribe((response) => {

                if (response.RequestSavingsAccountClientSIIF.Repeticiones != null) {
                  if (response.RequestSavingsAccountClientSIIF.Repeticiones.InformacionRep.length > 0) {

                    this.totalRecords = response.RequestSavingsAccountClientSIIF.Repeticiones.InformacionRep.length;
                    this.accountsByClient = response.RequestSavingsAccountClientSIIF.Repeticiones.InformacionRep.filter(a => a.NumerodeCuenta.length > 0);



                    this.clientInfoExist.accounts = true;
                    this.clientInfoExist.info = true;
                  }

                  if (response.RequestSavingsAccountClientSIIF.InformacionCab.Apellido1 != "" || response.RequestSavingsAccountClientSIIF.InformacionCab.TipodeIdentificacion == "3") {

                    const lastname = response.RequestSavingsAccountClientSIIF.InformacionCab.Apellido1.split(' ').join('');
                    const name = response.RequestSavingsAccountClientSIIF.InformacionCab.Nombre1.split(' ').join('');

                    this.customerShortName = `${name} ${lastname}`

                    if (this.customerShortName.length > 22) {
                      this.customerShortName = this.customerShortName.substr(0, 22);
                    }

                    let specialCharsPipe = new SpecialCharsPipe();
                    this.customerShortName = specialCharsPipe.transform(this.customerShortName);

                  }
                  else {

                    this.clientInfoExist.accounts = false;
                    this.clientInfoExist.info = false;

                    this.messages.showMessages('savingAccounts.messages.linkingAccounts.cardAssociation.badCreatedSiif', "ERROR");
                  }

                }
                else {
                  this.clientInfoExist.accounts = false;
                  this.clientInfoExist.info = false;

                  this.messages.showMessages(response.RequestSavingsAccountClientSIIF.Errores.ErrorRep.DesError, "ERROR");
                }


              });

            } else {
              this.clientInfoExist.info = false;
              this.clientInfoExist.accounts = false;
              this.messages.showMessages('savingAccounts.messages.linkingAccounts.user.noRecords', 'ERROR');
            }

          } else if (response.result === Result.NoRecords) {
            this.totalRecords = 0;
            this.clientInfoExist.info = false;
            this.clientInfoExist.accounts = false;
            this.messages.showMessages(
              'savingAccounts.messages.linkingAccounts.user.noRecords',
              'ERROR');
          } else if (response.result === Result.Error) {
            this.totalRecords = 0;
            this.clientInfoExist.info = false;
            this.clientInfoExist.accounts = false;
            this.messages.showMessages(response.GetRequestClientSiif.Errores.ErrorRep.DesError, 'ERROR');
          } else if (response.result === Result.InvalidSession) {

            this.invalidSession();
          }


        });
    } else {
      this.submittedSearch = true;
      return;
    }
    //######################################
    // this.accountsByClient = this.testData();
    // this.totalRecords = 15;
    // //console.log(this.accountsByClient);
  }

  associateAccount() {

    if (this.associateAccountForm.valid) {

      // this.postAccountAssociationIn.UsrId = "DATO PENDIENTE"; //DATO EN EL API
      // this.postAccountAssociationIn.UsrPassword ="DATO PENDIENTE"; //DATO EN EL API



      this.postAccountAssociationIn.TipoCuenta = "10"; //El 10 hace referencia al cuenta de ahorros
      this.postAccountAssociationIn.NumeroCuenta = this.associateAccountForm.controls.accountToAssociate.value;
      this.postAccountAssociationIn.TipoIdentificacion = this.clientInformation.TipoId;
      this.postAccountAssociationIn.NumeroIdentificacion = this.clientInformation.NumerodeIdentificacion;
      this.postAccountAssociationIn.NombresTarjetaHabiente = this.clientInformation.NombreORazonSocial;
      this.postAccountAssociationIn.ApellidosTarjetaHabiente = "";
      this.postAccountAssociationIn.NombreCorto = (this.legalPerson) ? this.associateAccountForm.value.legalPersonShortName : this.customerShortName;
      this.postAccountAssociationIn.CuentaPrincipal = this.associateAccountForm.controls.accountToAssociate.value;
      this.postAccountAssociationIn.CodigoSubtipo = this.associateAccountForm.controls.subtype.value;
      this.postAccountAssociationIn.Direccion = this.clientInformation.DireccionDomicilio1;
      this.postAccountAssociationIn.CodigoDepartamento = this.clientInformation.CodigoCiudadDomicilio;
      this.postAccountAssociationIn.IndicativoCiudad = this.clientInformation.CodigoCiudadDomicilio;
      this.postAccountAssociationIn.Telefono = this.clientInformation.TelefonoDomicilio1;
      this.postAccountAssociationIn.Email = this.clientInformation.EmailDomicilio;
      //this.postAccountAssociationIn.ActividadEconomica = "1"; //PENDIENTE
      //this.postAccountAssociationIn.OrigenIngresos = "1";
      this.postAccountAssociationIn.CodigoOficina = this.clientInformation.SucursalOrigenoRegion;
      this.postAccountAssociationIn.CodigoMunicipio = this.clientInformation.CodigoCiudadDomicilio;

      this.linkingAccountService.associateAccount(this.postAccountAssociationIn).subscribe((response) => {
        if (response.result === Result.Success) {

          this.transactionResult.Transanccion = true;
          this.transactionResult.Nombre = this.clientInformation.NombreORazonSocial;

          // this.transactionResult.Tipodeidentificacion = this.clientInformation.TipoId;// this.documentTypes.DocumentTypesGc.find(m => m.Code == this.clientInformation.TipoId).Value


          this.transactionResult.NumeroIdentificacion = this.clientInformation.NumerodeIdentificacion;
          this.transactionResult.NumeroCuenta = this.associateAccountForm.controls.accountToAssociate.value;
          this.transactionResult.TipoProducto = this.associateAccountForm.controls.subtype.value;
          this.transactionResult.ResultadoTransaccion = response.DescripcionRespuesta;
          this.messages.showMessages('savingAccounts.messages.linkingAccounts.cardAssociation.success', 'SUCCESS');
        }
        else if (response.result === Result.Error) {
          this.messages.showMessages('savingAccounts.messages.linkingAccounts.cardAssociation.noRecords', 'ERROR');

        }
        else if (response.result === Result.InvalidPermissionRole) {
          this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
        }
        else if (response.result === Result.InvalidSession) {
          this.invalidSession();
        }
      })
    } else {
      this.submittedAssociate = true;
      return;
    }



  }

  openUserInformation(data: any) {

    this.formEditAccount.controls.modal_typeId.setValue(data.TipoId);


    this.formEditAccount.controls.modal_Id.setValue(
      data.NumerodeIdentificacion
    );
    this.formEditAccount.controls.modal_fullName.setValue(
      data.NombreORazonSocial
    );
    this.formEditAccount.controls.modal_userAddres.setValue(
      data.DireccionDomicilio1
    );
    this.formEditAccount.controls.modal_userCompanyAddress.setValue(
      data.DireccionEmpresa1
    );
    this.formEditAccount.controls.modal_date.setValue(
      data.FechaIngreso
    );
    this.formEditAccount.controls.modal_branch.setValue(
      data.SucursalOrigenoRegion
    );

    this.editAccountModal.open();


  }

  closeEditAccount() { }
  confirmEditAccount() {
    this.editAccountModal.closeModal();
  }

  closeModal() { }

  acceptModal() { }

  get c() {
    return this.searchAccountsForm.controls;
  }
  get d() {
    return this.associateAccountForm.controls;
  }

  invalidSession() {
    this.messages.showMessages(
      'Su sessión ha caducado, ingrese de nuevo al sistema',
      'ERROR'
    );
    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
}
