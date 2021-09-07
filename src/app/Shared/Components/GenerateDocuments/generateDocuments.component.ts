import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { GenerateCertificateService } from '../../../SavingsAccount/Components/GenerateCertificate/Services/generateCertificate.service';
import { Result } from '../../../Commons/Classes/result';
import { MessagesComponent } from '../Messages/messages.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { SpinnerService } from '../../Services/spinner.service';
import { GetCustomerProductsIn, RequestCertificateIn } from './MethodParameters/getCustomerProductsIn';
import { PATHNAMEREQUEST } from './MethodParameters/getCustomerProductsIn';
import { GenerateDocumentService } from './services/generateDocument.service';
import { CustomerProducts } from './MethodParameters/getCustomerProductsOut';
import { ValidateSesion } from '../../Services/validateSesion.component';
import { ValidateSesionService } from '../../Services/validateSesion.service';
import { Products } from '../../../SavingsAccount/Components/GenerateCertificate/MethodParameters/GetUserProductsOut';
import { GetUserProductsIn } from '../../../SavingsAccount/Components/GenerateCertificate/MethodParameters/GetUserProductsIn';
import { GetAccountCertificationIn, GetAccountMovementsIn } from '../../../SavingsAccount/Components/GenerateCertificate/MethodParameters/GetAccountCertificationIn';
import * as moment from 'moment';

@Component({
  selector: 'app-generate-documents',
  templateUrl: './generateDocuments.component.html',
  providers: [GenerateDocumentService]
})
export class GenerateDocumentsComponent implements OnInit {
  public pathNameMovements: boolean;
  public pathSummary: boolean;
  generaterequest: boolean;
  producyAccounts: boolean;
  documentTypesGc: any;
  products: CustomerProducts[];
  productTypesGc: any;
  accounts: Products[];
  public generateForm: FormGroup;
  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @Input()
  public cliente: string;
  pathComponent: string;
  productTypeGc: any;
  constructor(
    private service: GenerateCertificateService,
    private router: Router,
    private fb: FormBuilder,
    private spinnerService: SpinnerService,
    private route: ActivatedRoute,
    private generateDocumentService: GenerateDocumentService,
    private validateSesion: ValidateSesionService
  ) {

    this.generateForm = this.fb.group({
      documentTypeGcDdl: [, [Validators.required]],
      clientDocument: [
        { value: '', disabled: false },
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(5),
          Validators.maxLength(15),
        ],
      ],
      product: [, [Validators.required]],
      typeCredit: [{ value: '', disabled: true }, Validators.required],
      account: [{ value: '', disabled: true }],
      dateStart: [null],
      dateLimit: [null]
    });

  }
  ngOnInit() {
    this.pathComponent = this.route.snapshot.data.urls[0].url;
    this.GetDocummentTypesGc();
    this.GetProductTypesGc();
  }
  GetDocummentTypesGc() {
    this.service.getDocumentTypesGc().subscribe((response) => {
      switch (response.result) {
        case (Result.Success):
          this.documentTypesGc = (response.DocumentTypesGc);
          break;
        case (Result.InvalidSession):
          this.invalidSession();
          break;
        default:
          break;
      }
    });
  }

  consultarCliente() {
    this.spinnerService.show();
    let request: string = '';
    request = PATHNAMEREQUEST.GETCUSTOMERPRODUCTS;
    const customerInformation = new GetCustomerProductsIn();
    customerInformation.identificationType = this.generateForm.value.documentTypeGcDdl;
    customerInformation.identificationNumber = this.generateForm.value.clientDocument;
    if (this.pathComponent === '/balances' || this.pathComponent === '/peace-save') {
      this.generateDocumentService.getCustomerProducts(request, customerInformation).subscribe(
        (response) => {
          switch (response.result) {
            case (Result.Success):
              this.spinnerService.hide();
              this.products = response.Products;
              if (this.pathComponent === '/movements' && this.products.length > 0) {
                this.pathNameMovements = true;
              } else if (this.pathComponent != '/movements' && this.products.length > 0) {
                this.spinnerService.hide();
                this.pathNameMovements = false;
                this.pathSummary = true;
              }
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              this.generateForm.reset();
              this.pathNameMovements = false;
              this.pathSummary = false;
              this.productTypeGc = null;
              this.spinnerService.hide();
              break;
            case (Result.NoRecords):
              this.messages.showMessages('No hay informacion para este cliente', 'ERROR')
              this.generateForm.reset();
              this.spinnerService.hide();
          }
        },

      );
    } else if (this.pathComponent === '/movements' || this.pathComponent === '/summaryacount') {
      request = PATHNAMEREQUEST.GEtPRODUCTSACCOUNT;
      const data = new GetUserProductsIn();
      data.documentTypeId = this.generateForm.value.documentTypeGcDdl;
      data.clientBankIdentifiers = this.generateForm.value.clientDocument;
      this.generateDocumentService.getAccountsProducts(request, data).subscribe(
        (response) => {
          console.log(response);
          this.producyAccounts = true;
          switch (response.result) {
            case (Result.Success):
              this.spinnerService.hide();
              this.accounts = response.listAccounts;
              if (this.pathComponent === '/movements' && this.accounts.length > 0) {
                this.spinnerService.hide();
                this.pathNameMovements = true;
                this.pathSummary = false;
              } else if (this.pathComponent != '/movements' && this.accounts.length > 0) {
                this.spinnerService.hide();
                this.pathNameMovements = false;
                this.pathSummary = true;
              }
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              this.generateForm.reset();
              this.pathNameMovements = false;
              this.pathSummary = false;
              this.productTypeGc = null;
              this.spinnerService.hide();
              break;
            case (Result.NoRecords):
              this.messages.showMessages('No hay informacion para este cliente', 'ERROR')
              this.generateForm.reset();
              this.spinnerService.hide();
              this.pathNameMovements = false;
              this.pathSummary = false;
              this.productTypeGc = null;
          }
        },
        (error) => {
          this.spinnerService.hide();
          console.log(error);
        }
      );
    }


  }
  changeProducts() {
    this.products.forEach(pr => {
      if (this.generateForm.value.product == pr.Product) {
        this.generateForm.patchValue({
          typeCredit: pr.ProductType,
        })
      }
    });
  }
  downloadFile() {
    this.spinnerService.show();
    let request: string = '';
    let requestCerticate: any;
    if (this.pathComponent === '/balances') {
      request = PATHNAMEREQUEST.GETACCOUNTDAYCERTIFICATE;
      requestCerticate = new RequestCertificateIn();
      requestCerticate.productNumber = this.generateForm.value.product;
    } else if (this.pathComponent === '/peace-save') {
      request = PATHNAMEREQUEST.GETBALANCESAVECERTIFICATE;
      requestCerticate = new RequestCertificateIn();
      requestCerticate.productNumber = this.generateForm.value.product;
    } else if (this.pathComponent === '/summaryacount') {
      request = PATHNAMEREQUEST.GETSUMMARYACCOUNT;
      requestCerticate = new GetAccountCertificationIn();
      requestCerticate.IdentificationType = this.generateForm.value.documentTypeGcDdl;
      requestCerticate.IdentificationNumber = this.generateForm.value.clientDocument;
      requestCerticate.AccountNumber = this.generateForm.value.product;
      requestCerticate.AccountType = this.accounts.find(m => m.accountNumber == this.generateForm.value.product).accountType;
    } else if (this.pathComponent === '/movements') {
      request = PATHNAMEREQUEST.GETACCOUNTMOVEMENTS;
      requestCerticate = new GetAccountMovementsIn();
      requestCerticate.AccountNumber = this.generateForm.value.product;
      requestCerticate.dateStart = String(this.generateForm.value.dateStart).replace('-', '').replace('-', '');
      requestCerticate.dateLimit = String(this.generateForm.value.dateLimit).replace('-', '').replace('-', '');
      requestCerticate.userName = JSON.parse(localStorage.getItem('user_info')).usr_userName;
      console.log(requestCerticate);
    }
    this.generateDocumentService.GenerateDocument(request, requestCerticate).subscribe(
      response => {
        console.log(response);
        switch (response.result) {
          case (Result.Success):
            this.generateForm.reset();
            this.pathNameMovements = false;
            this.pathSummary = false;
            this.productTypeGc = null;
            this.spinnerService.hide();
            this.messages.showMessages('Archivo generado Correctamente', 'SUCCESS')
            const linkSource = 'data:application/pdf;base64,' + response.file + '\n';
            const downloadLink = document.createElement("a");
            const fileName = response.FileName;
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
            break;
          case (Result.InvalidSession):
            this.generateForm.reset();
            this.pathNameMovements = false;
            this.pathSummary = false;
            this.productTypeGc = null;
            this.spinnerService.hide();
            this.invalidSession();
            break;
          case (Result.NoRecords):
            this.messages.showMessages('No hay registros para esta consulta', 'ERROR');
            this.generateForm.reset();
            this.pathNameMovements = false;
            this.pathSummary = false;
            this.productTypeGc = null;
            this.spinnerService.hide();
        }
      }, error => {
        this.messages.showMessages('Error al generar el archivo', 'ERROR')
        console.log(error);
        this.generateForm.reset();
        this.pathNameMovements = false;
        this.pathSummary = false;
        this.spinnerService.hide();
      }
    );

  }
  clearForm() {
    this.generateForm.reset();
    this.pathSummary = false;
    this.pathNameMovements = false;
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
  GetProductTypesGc() {
    this.service.getProductTypesGc().subscribe((response) => {
      switch (response.result) {
        case (Result.Success):
          this.productTypesGc = (response.ProductTypesGc);
          break;
        case (Result.InvalidSession):
          this.invalidSession();
          break;
        default:
          break;
      }
    });
  }
  getAccountType(accNumber) {
    try {
      const accTypeId = this.accounts.find(m => m.accountNumber == accNumber).accountType;
      this.productTypeGc = this.productTypesGc.find(m => m.AccountTypeId == accTypeId).Description;
    } catch {
      this.productTypeGc = "Tipo de cuenta no disponible"
    }
  }
}
