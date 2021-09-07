import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { AbonoacapitalFormService } from '../Services/abonoacapital.form.service';
import { AbonoacapitalService } from '../Services/abonoacapital.service';
import { GetUserProductsIn } from '../MethodParameters/GetUserProductsIn';
import { GetFilePaymentIn } from '../MethodParameters/GetFilePaymentIn';

@Component({
  selector: 'app-abonoacapital',
  templateUrl: './abonoacapital.component.html',
  styleUrls: ['./abonoacapital.component.css']
})
export class AbonoacapitalComponent implements OnInit {
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
  accountSelected: boolean = false;
  creditFilter: any;
  dateMin: any;
  dateMax: any;

  constructor(private formService: AbonoacapitalFormService,
    private service: AbonoacapitalService,
    private formBuilder: FormBuilder,
    private statusPipe: StatusPipe,
    private router: Router) { }

    ngOnInit() { 
      this.searchCreditForm = this.getSearchAccounts(); 
      this.getFileForm = this.getFileforms();
      this.GetDocummentTypesGc();
      this.setDates();
      this.onChanges();
  }

  setDates()
  { 
    var dateNow = new Date();
    var year = dateNow.getFullYear();
    var month = dateNow.getMonth() + 1;
    var day = dateNow.getUTCDate();
    this.dateMin = {year: year, month: month, day: day};
    // this.dateMin.setDate(this.dateMin.getDate() + 1);  
    // this.dateMax = new Date(2021, 6, 24);
  }

  getFileforms(): FormGroup {
   return this.formBuilder.group({
    
        selectCreditNumber: [, [Validators.required]],
        labelProducyType: [ { value: '', disabled: false }, ],
        labelValueCuote: [
          { value: '', disabled: false },
          [
                         
              Validators.minLength(5),
              Validators.maxLength(15),
          ],
      ],
        labelEANcode: [ { value: '', disabled: false }, ],
        labelValuePay: [ ,
        [
             Validators.minLength(5),
             Validators.maxLength(15),
        ],
      ],
        DateLimitOfPay: [ , ]
             
      });
}

  getSearchAccounts(): FormGroup {
    return this.formBuilder.group({
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
    });
}


onChanges(): void {
  this.getFileForm.valueChanges.subscribe(() => {
    console.log(this.getFileForm.value)
  });
}

SearchAccounts() {
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

onChange(creditValue) {
  console.log("entro");
  this.creditFilter = this.numberCreditConsume.find(
     x => x.CreditNumber === creditValue 
  );
  this.accountSelected = true;
}

getFile() {
  if (this.getFileForm.invalid) {
    console.log("ERROR");

    this.getFileForm.markAllAsTouched();
  }
  else {
    let data = new GetFilePaymentIn();
    console.log("FORM", this.getFileForm.value.selectCreditNumber);
    data.productBankIdentifier = this.getFileForm.value.selectCreditNumber;
    data.productBankPaymentValue = this.getFileForm.value.labelValuePay;    
    data.productBankSendMail = false;
    data.productBankShareValue =  this.getFileForm.value.labelValueCuote === "" ? this.creditFilter.ValuePay : this.getFileForm.value.labelValueCuote ;
    var years = this.getFileForm.value.DateLimitOfPay.year;
    var months = this.getFileForm.value.DateLimitOfPay.month;
    var days = this.getFileForm.value.DateLimitOfPay.day;
    data.productBankPaymentDate = years + '-' + months + '-' + days;
    data.Channel = "Credisoft2.0";
    data.IdUser = this.getFileForm.value.labelEANcode;
    console.log("DATA", data);
    this.service.getFilePayment(data).subscribe((response) => {
      console.log(response); 
      switch (response.result) {
        case (Result.Success):
          if ( response.getFileName === null){
            this.messages.showMessages(response.message, 'ERROR');
          }
          else
          {
          this.accountExist = true;
          const linkSource = 'data:application/pdf;base64,' + response.file + '\n';
          const downloadLink = document.createElement("a");
          const fileName = response.getFileName;
          downloadLink.href = linkSource;
          downloadLink.download = fileName;
          downloadLink.click();
          }
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
  
  cleanForm() {
    this.searchCreditForm.reset()
    this.getFileForm.reset()
    this.productTypeGc = '';
    this.submittedSearch = false;
    this.accountExist = false;
    this.accountSelected = false;
  }

  get c() {
    return this.searchCreditForm.controls;
  }

  get f() {
    return this.getFileForm.controls;
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
