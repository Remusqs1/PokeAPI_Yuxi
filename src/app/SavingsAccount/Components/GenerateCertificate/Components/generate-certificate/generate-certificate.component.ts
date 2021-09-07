import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { GetAccountCertificationIn } from '../../MethodParameters/GetAccountCertificationIn';
import { DocumentTypesGc, GetDocumentTypesOut } from '../../MethodParameters/GetDocumentTypeGc';
import { GetUserProductsIn } from '../../MethodParameters/GetUserProductsIn';
import { Products } from '../../MethodParameters/GetUserProductsOut';
import { GenerateCertificateFormService } from '../../Services/generate-certificate.form.service';
import { GenerateCertificateService } from '../../Services/generateCertificate.service';

@Component({
  selector: 'app-generate-certificate',
  templateUrl: './generate-certificate.component.html',
  styleUrls: ['./generate-certificate.component.css']
})
export class GenerateCertificateComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  public searchAccountsForm: FormGroup;
  documentTypesGc: any;
  productTypesGc: any;
  productTypeGc: any;
  submittedSearch: boolean = false;
  accountExist: boolean = false;
  accountSelected: boolean = true;
  accounts: Products[];

  constructor(private formService: GenerateCertificateFormService,
    private service: GenerateCertificateService,
    private router: Router) { }


  ngOnInit() {
    this.searchAccountsForm = this.formService.getSearchAccounts();

    this.GetDocummentTypesGc();
    this.GetProductTypesGc();
    //test
    //this.loadDataTest();
    this.accountExist = false;

  }

  changeIdentification(event: KeyboardEvent) {
    // console.log(event);
    if (event.key != "Enter") {
      this.accounts = [];
      this.productTypeGc = '';
      this.accountExist = false;
    } else {


      this.searchClientInformation();

    }

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

  loadDataTest() {
    let data = new GetUserProductsIn();
    data.clientBankIdentifiers = "1023888834";
    data.documentTypeId = 1;
    this.service.getUserProductsGc(data).subscribe((response) => {


      switch (response.result) {
        case (Result.Success):
          this.accountExist = true;
          this.accounts = (response.listAccounts);
          break;
        case (Result.InvalidSession):
          break;
        case (Result.InvalidSession):
          break;
        case (Result.NoRecords):
          this.messages.showMessages(response.message, 'ERROR');
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


  searchClientInformation() {
    this.submittedSearch = true;
    if (this.searchAccountsForm.invalid) {
      console.log("ERROR");

      this.searchAccountsForm.markAllAsTouched();
    }
    else {
      let data = new GetUserProductsIn();

      console.log("FORM", this.searchAccountsForm.value.clientDocument);

      data.clientBankIdentifiers = this.searchAccountsForm.value.clientDocument;
      data.documentTypeId = Number(this.searchAccountsForm.value.documentTypeGcDdl);
      this.service.getUserProductsGc(data).subscribe((response) => {
        console.log(response);
        switch (response.result) {
          case (Result.Success):
            this.accountExist = true;
            this.accounts = (response.listAccounts);
            break;
          case (Result.InvalidSession):
            break;
          case (Result.InvalidSession):
            break;
          case (Result.NoRecords):


            this.messages.showMessages(response.message, 'ERROR');
          default:
            break;
        }

      });

    }


  }

  cleanForm() {

    this.searchAccountsForm.reset()
    this.accounts = [];
    this.productTypeGc = '';
    this.submittedSearch = false;
    this.accountExist = false;
  }


  getCertificate(selectAccountNumber) {


    if (this.searchAccountsForm.valid) {
      if (selectAccountNumber != 'null') {
        this.accountSelected = true;
        let getAccountCertificationIn: GetAccountCertificationIn = new GetAccountCertificationIn();
        getAccountCertificationIn.AccountNumber = selectAccountNumber;
        getAccountCertificationIn.AccountType = this.accounts.find(m => m.accountNumber == selectAccountNumber).accountType;
        getAccountCertificationIn.IdentificationNumber = this.searchAccountsForm.value['clientDocument'];
        getAccountCertificationIn.IdentificationType = this.searchAccountsForm.value['documentTypeGcDdl'];

        console.log(getAccountCertificationIn);
        this.service.getAccountCertificationGc(getAccountCertificationIn).subscribe((response) => {

          const linkSource = 'data:application/pdf;base64,' + response.file + '\n';
          const downloadLink = document.createElement("a");
          const fileName = response.FileName;
          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();

        })
      } else {
        this.accountSelected = false;
      }



    } else {
      this.searchAccountsForm.markAllAsTouched();
    }
  }

  get c() {
    return this.searchAccountsForm.controls;
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
