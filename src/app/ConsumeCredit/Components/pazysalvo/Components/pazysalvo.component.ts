import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { PazysalvoService } from '../Services/pazysalvo.service';
import { GetUserProductsIn } from '../MethodParameters/GetUserProductsIn';
import { PazysalvoFormService } from '../Services/pazysalvo.form.service';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { GetFilePeaceSafeIn } from '../MethodParameters/GetFilePeaceSafeIn';

@Component({
  selector: 'app-movements',
  templateUrl: './pazysalvo.component.html',
  styleUrls: ['./pazysalvo.component.css']
})
export class PazysalvoComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  public searchCreditForm: FormGroup;
  public getFileForm: FormGroup;
  documentTypesGc: any;
  emailsSends: any;
  productTypesGc: any;
  creditFilter: any;
  numberCreditConsume: any;
  productTypeGc: any;
  submittedSearch: boolean = false;
  accountExist: boolean = false;
  accountSelected: boolean = false;
  sendEmail: boolean = false;


  constructor(private formService: PazysalvoFormService,
    private service: PazysalvoService,
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
        labelProducyType: [ { value: '', disabled: false }, ],
        selectCreditNumber: [, [Validators.required]],
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

  onChange(creditValue) {
    this.creditFilter = this.numberCreditConsume.find(
       x => x.CreditNumber === creditValue
    );
    this.accountSelected = true;
  }

  getFilePeaceForm() {
    this.sendEmail= false;
    if (this.getFileForm.invalid) {
      console.log("ERROR");
      this.getFileForm.markAllAsTouched();
    }
    else {
      let data = new GetFilePeaceSafeIn();
      console.log("FORM", this.getFileForm.value.selectCreditNumber);
      data.productBankIdentifier = this.getFileForm.value.selectCreditNumber;
      data.productBankSendMail = false;
      data.Channel = "Credisoft2.0";
      this.service.GetFilePeaceSafe(data).subscribe((response) => { 
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
            break;
          case (Result.Error):            
              this.messages.showMessages(response.message, 'ERROR');
              break;
          default:
            break;
        }
      });
   }
  }

  sendFilePeaceForm() {
    if (this.getFileForm.invalid) {
      console.log("ERROR");
      this.getFileForm.markAllAsTouched();
    }
    else {
      let data = new GetFilePeaceSafeIn();
      console.log("FORM", this.getFileForm.value.selectCreditNumber);
      data.productBankIdentifier = this.getFileForm.value.selectCreditNumber;
      data.productBankSendMail = true;
      data.Channel = "Credisoft2.0";
      this.service.GetFilePeaceSafe(data).subscribe((response) => { 
        console.log(response); 
        switch (response.result) {
          case (Result.Success):
            if ( response.getFileName === null){
              this.messages.showMessages(response.message, 'ERROR');
            }
            else
            {
            this.sendEmail= true;
            this.emailsSends = (response.ListEmail);
            }
            break;
          case (Result.InvalidSession):
            break;
          case (Result.InvalidSession):
            break;
          case (Result.NoRecords):
            this.messages.showMessages(response.message, 'ERROR');
            break;
          case (Result.Error):
              this.emailsSends = (response.ListEmail);
              this.sendEmail= false;
              this.messages.showMessages(response.message, 'ERROR');
              break;
          default:
            break;
        }
      });
   }
  }


  prueba() {
    this.sendEmail= false;
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
    this.accountSelected = false;
    this.sendEmail= false;
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
