import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { ExtractsService } from '../Services/Extracts.service';
import { GetUserProductsIn } from '../MethodParameters/GetUserProductsIn';
import { ExtractsFormService } from '../Services/Extracts.form.service';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { GetFileCreditIn } from '../MethodParameters/GetFileCreditIn';

@Component({
  selector: 'app-movements',
  templateUrl: './Extracts.component.html',
  styleUrls: ['./Extracts.component.css']
})
export class ExtractsComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  public searchCreditForm: FormGroup;
  public getFileForm: FormGroup;
  documentTypesGc: any;
  dateCreditConsume: any;
  productTypesGc: any;
  numberCreditConsume: any;
  productTypeGc: any;
  submittedSearch: boolean = false;
  accountExist: boolean = false;
  accountSelected: boolean = true;


  constructor(private formService: ExtractsFormService,
    private service: ExtractsService,
    private formBuilder: FormBuilder,
    private statusPipe: StatusPipe,
    private router: Router) { }

  ngOnInit() { 
      this.searchCreditForm = this.getSearchAccounts(); 
      this.getFileForm = this.getFileforms();
      this.GetDocummentTypesGc();
  }
  
  getFileforms(): FormGroup {
    return this.formBuilder.group({
        selectCreditNumber: [, [Validators.required]],
        selectCreditDate: [, [Validators.required]],
    });
}

  getSearchAccounts(): FormGroup {
    return this.formBuilder.group({
        documentTypeGcDdl: [, [Validators.required]],
        //productTypeGcDdl: [, [Validators.required]],
        clientDocument: [
            { value: '', disabled: false },
            [
                Validators.required,
                Validators.pattern('^[0-9]*$'),
                Validators.minLength(5),
                Validators.maxLength(15),
            ],
        ],
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

  prueba2() {
    if (this.getFileForm.invalid) {
      console.log("ERROR");

      this.getFileForm.markAllAsTouched();
    }
    else {
      let data = new GetFileCreditIn();
      console.log("FORM", this.getFileForm.value.selectCreditNumber);
      data.productBankIdentifier = this.getFileForm.value.selectCreditNumber;
      data.productBankStatementDate = this.getFileForm.value.selectCreditDate;
      this.service.getFileCreditConsumer(data).subscribe((response) => {
        console.log(response); 
        switch (response.result) {
          case (Result.Success):
            this.accountExist = true;
            const linkSource = 'data:application/pdf;base64,' + response.productBankStatementFile + '\n';
            const downloadLink = document.createElement("a");
            const fileName = response.productBankStatementFileName;
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
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

  prueba() {
    this.submittedSearch = true; 
    if (this.searchCreditForm.invalid) {
        console.log("ERROR");
  
        this.searchCreditForm.markAllAsTouched();
      }
      else {
       let data = new GetUserProductsIn();
      console.log("FORM", this.searchCreditForm.value.clientDocument);
      data.NumberDocument = this.searchCreditForm.value.clientDocument;
      data.TypeDocument = Number(this.searchCreditForm.value.documentTypeGcDdl);     
        this.service.getUserProductsGc(data).subscribe((response) => {
          console.log(response); 
          switch (response.result) {
            case (Result.Success):
              if (response.ListCredit != null)
              {
                this.accountExist = true;
                this.numberCreditConsume = (response.ListCredit);
                this.dateCreditConsume = (response.ListDates);
              }
              else
              {
                this.messages.showMessages('No se encontraron obligaciones para este cliente', 'ERROR');
              } 
              
              break;
            case (Result.InvalidSession):
              break;
            case (Result.InvalidSession):
              break;
            case (Result.NoRecords):
              this.messages.showMessages('No se encontraron obligaciones para este cliente', 'ERROR');
            default:
              break;
          }
        });
      }
  }
  

  cleanForm() {
    this.searchCreditForm.reset()
    this.getFileForm.reset()
    this.productTypeGc = '';
    this.submittedSearch = false;
    this.accountExist = false;
  }

  get c() {
    return this.searchCreditForm.controls;
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
