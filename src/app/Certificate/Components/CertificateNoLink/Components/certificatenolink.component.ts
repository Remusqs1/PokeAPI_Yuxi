import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { GetFileNoLinkIn } from '../MethodParameters/GetFileNoLinkIn';
import { GetvalidationDataClientIn } from '../MethodParameters/GetvalidationDataClientIn';
import { CertificatenolinkFormService } from '../Service/certificatenolink.form.service';
import { CertificatenolinkService } from '../Service/certificatenolink.service';

@Component({
  selector: 'app-movements',
  templateUrl: './certificatenolink.component.html',
  styleUrls: ['./certificatenolink.component.css']
})
export class CertificatenolinkComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  public searchCreditForm: FormGroup;
  public getFileForm: FormGroup;
  documentTypesGc: any;
  emailsSends: any;
  productTypesGc: any;
  creditFilter: any;
  nameProducts: any;
  productTypeGc: any;
  NameClient:any;
  Email:any;
  submittedSearch: boolean = false;
  accountExist: boolean = false;
  accountSelected: boolean = false;
  sendEmail: boolean = false;


  constructor(private formService: CertificatenolinkFormService,
    private service: CertificatenolinkService,
    private formBuilder: FormBuilder,
    private statusPipe: StatusPipe,
    private router: Router) { }

  ngOnInit() { 
      this.searchCreditForm = this.getSearchFileNoLink(); 
      this.GetDocummentTypesGc();
      this.getUserProducts();
  }
  

getSearchFileNoLink(): FormGroup {
    return this.formBuilder.group({
        labelProducyType: [ { value: '', disabled: false }, ],
        selectProducts: [, [Validators.required]],
        documentTypeGcDdl: [, [Validators.required]],
        nameClient: [, 
          [
            Validators.minLength(5),
            Validators.pattern(/^[a-zA-Z ]+$/),
          ]
        ],
        emailClient: [, 
          [             
            Validators.required,  
            Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$'),
          ]
        ],
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

 

  getFilePeaceForm() {
    // if (this.searchCreditForm.invalid) {
    //   console.log("ERROR");
    //   this.searchCreditForm.markAllAsTouched();
    // }
    // else {
      let data = new GetFileNoLinkIn();
      console.log("FORM", this.searchCreditForm.value.selectProducts);
      data.Options = this.searchCreditForm.value.selectProducts;
      data.productBankSendMail = false;
      data.NameClient = this.searchCreditForm.value.nameClient === null ? this.NameClient : this.searchCreditForm.value.nameClient ;
      data.NumberDocument = this.searchCreditForm.value.clientDocument;
      data.TypeDocument = this.searchCreditForm.value.documentTypeGcDdl;
      data.Email = this.searchCreditForm.value.emailClient;
      data.Channel = "Credisoft2.0";
      console.log(data,this.NameClient); 
      this.service.GetFileNoLink(data).subscribe((response) => { 
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
    // }
  }

  sendFilePeaceForm() {
    if (this.searchCreditForm.invalid) {
      console.log("ERROR");
      this.searchCreditForm.markAllAsTouched();
    }
    else {
      let data = new GetFileNoLinkIn();
      console.log("FORM", this.searchCreditForm.value.selectProducts);
      data.Options = this.searchCreditForm.value.selectProducts;
      data.productBankSendMail = true;
      data.NameClient = this.searchCreditForm.value.nameClient === null ? this.NameClient : this.searchCreditForm.value.nameClient ;
      data.NumberDocument = this.searchCreditForm.value.clientDocument;
      data.TypeDocument = this.searchCreditForm.value.documentTypeGcDdl;
      data.Email = this.searchCreditForm.value.emailClient;
      data.Channel = "Credisoft2.0";
      this.service.GetFileNoLink(data).subscribe((response) => { 
        console.log(response); 
        switch (response.result) {
          case (Result.Success):
            if ( response.getFileName === null){
              this.messages.showMessages(response.message, 'ERROR');
            }
            else
            {
            this.messages.showMessages(response.message, 'SUCCESS');
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
              this.sendEmail= false;
              this.messages.showMessages(response.message, 'ERROR');
              break;
          default:
            break;
        }
      });
   }
  }


  getUserProducts() {
      this.submittedSearch = true;        
        this.service.getUserProductsGc().subscribe((response) => {
          console.log(response); 
          switch (response.result) {
            case (Result.Success):
                this.accountExist = true;
                this.nameProducts = (response.ListOptionsDoc);         
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

  onChange(e: any) {
    let data = new GetvalidationDataClientIn();
    const prueba = e.target.value;
    data.NumberDocument = prueba;
    data.Options = "Consumo";
    data.TypeDocument = this.searchCreditForm.value.documentTypeGcDdl;
    this.service.GetvalidationDataClient(data).subscribe((response) => {
      switch (response.result) {
        case (Result.Success):
          this.NameClient = response.NameClient;    
          this.Email = response.EmailClient;  
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
  

  cleanForm() {
    this.searchCreditForm.reset()
    this.productTypeGc = '';
    this.submittedSearch = false;
    this.accountExist = false;
    this.accountSelected = false;
    this.sendEmail= false;
    this.NameClient = ''
    this.Email = ''
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
