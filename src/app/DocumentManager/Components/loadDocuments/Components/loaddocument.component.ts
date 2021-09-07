import { Component, OnInit, ViewChild } from '@angular/core';
import { DocumentManagerService } from '../../../Services/documentmanager.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Company, GetCompanies } from '../../MethodParameters/GetCompanies';
import { Products, ProductsList, GetProducts } from '../../MethodParameters/GetProducts';
import { DocumentType, GetDocumentType } from '../../MethodParameters/GetDocumentType';
import { CreateLoadDocumentIn } from '../../MethodParameters/CreateLoadDocumentIn';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { Router } from '@angular/router';
import { Result } from '../../../../Commons/Classes/result';
import { SmartTableComponent } from '../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { ModalBasicComponent } from '../../../../Shared/Components/Modal/modal.component';
import { GetDocumentIn } from '../../MethodParameters/getDocumentIn';
import { Document, GetDocumentOut } from '../../MethodParameters/GetDocumentOut';
import { saveAs } from 'file-saver';
import { SpinnerService } from '../../../../Shared/Services/spinner.service';
import { UpdateSignStatusIn } from '../../MethodParameters/updateSignStatusIn';
import { environment } from '../../../../../environments/environment';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { GetPermissionByRoleIn } from '../../../../Administration/Components/Permission/MethodParameters/getPermissionByRoleIn';
import { User } from '../../../../Commons/Entities/user';
import { PermissionService } from '../../../../Administration/Components/Permission/Services/permission.service';
import { PermissionByRole } from '../../../../Administration/Components/Permission/MethodParameters/permissionByRole';

@Component({
  selector: 'app-documentmanager',
  templateUrl: './loaddocument.component.html',
  styleUrls: ['./loaddocument.component.css']
})
export class LoadDocumentComponent implements OnInit {
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('createModal', { static: false }) Modal: ModalBasicComponent;
  @ViewChild('ViewDoc', { static: false }) ModalView: ModalBasicComponent;
  @ViewChild('UpdateSignModal', { static: false }) UpdateSignModal: ModalBasicComponent;
  public loadingdocuments: FormGroup;
  public listDocumentForm: FormGroup;
  public updateSignForm: FormGroup;
  public listCompanies: GetCompanies;
  public listProducts: GetProducts;
  public listProductsModal: GetProducts;
  public listTypeDocuments: GetDocumentType;
  public listTypeDocumentsModal: GetDocumentType;
  public getCompanyIn: Company;
  public getproductsIn: Products;
  public filename: string;
  public extention: string;
  public file: string;
  public name: string;
  public getDocumentsType: DocumentType;
  public ProductsListDT: Array<ProductsList> = [];
  public ProductListElement: ProductsList;
  public settings: any;
  public totalRecords: number;
  public ModalAceptText: string;
  public ModalCloseText: string;
  public ModalTitle: string;
  public ModalCloseTextView: string;
  public ModalTitleView: string;
  public hasError = false;
  public ModalOpen: boolean;
  public listDocuments: Document[];
  public imageObject: Array<object>;
  public displayViewPdf: boolean = false;
  public displayImage: boolean = false;
  public displayNewDocument: boolean = false;
  public pdfSrc: string = '';
  public UpdateSignModalTitleView: string = 'Actualizar estado de firma';
  public signData : any;
  public loadDocumentProducts : number[] = environment.loadDocumentProducts;
  public actions: PermissionByRole[] = [];
  public canLoadDoc : Boolean = false;
  public canUpdateSign : Boolean = false;

  constructor(private docService: DocumentManagerService, private router: Router,  private spinnerService: SpinnerService,
              private permissionProxy: PermissionService,) {
    this.getCompanyIn = new Company();
    this.getCompanyIn.IsActive = true;
    this.getproductsIn = new Products();
    this.getDocumentsType = new DocumentType();
    this.ProductListElement = new ProductsList();
    this.listCompanies = new GetCompanies();
    this.listProducts = new GetProducts();
    this.listProductsModal = new GetProducts();
    this.listTypeDocuments = new GetDocumentType();
    this.listTypeDocumentsModal = new GetDocumentType();
    this.filename = '';
    this.name = '';
    this.ModalCloseText = 'Cerrar';
    this.ModalCloseTextView = 'Cerrar';
    this.ModalOpen = false;
    this.listDocuments
  }

  ngOnInit() {
    this.listDocumentForm = this.docService.getListDocument();
    this.updateSignForm = this.docService.getActivateSignForm()
    this.loadingdocuments = this.docService.getLoadDocument();
    this.getCompanies();
    // this.settings = this.docService.getConfigDataTable();
    this.listDocumentForm.patchValue({ TypeDocument: 0, Product: 0, CaseId: '' });
    this.settings = this.docService.getConfigDataTable();
    this.getPermission();
  }

  ngAfterViewInit(): void {
    this.listDocumentForm.get('Product').valueChanges.subscribe(value => {
      if (this.loadDocumentProducts.includes(+value) && this.canUpdateSign) {
        this.settings = this.docService.getSignDataTable();
      }
      else {
        this.settings = this.docService.getConfigDataTable();
      }
    });
  }

  getCompanies() {
    this.spinnerService.show();
    this.getCompanyIn.Name = '';
    this.getCompanyIn.Code = '';
    this.getCompanyIn.Id = 0;
    this.docService.getCompanies(this.getCompanyIn).subscribe(
      response => {
        switch (response.result) {
          case (Result.Success):
            this.spinnerService.hide();
            this.listCompanies = response;
            break;
          case (Result.InvalidSession):
            this.spinnerService.hide();
            this.invalidSession();
            break;
          case (Result.Error):
            this.spinnerService.hide();
            this.messages.showMessages(response.message, 'ERROR');
        }

      });
  }
  changeCompany() {
    this.getProducts();
  }
  getProducts() {
    if (this.ModalOpen == true) {
      this.getproductsIn.CompanyId = this.loadingdocuments.value.Company;
      this.docService.getProducts(this.getproductsIn).subscribe(
        response => {
          switch (response.result) {
            case (Result.Success):
              this.listProductsModal = response;
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              break;
            case (Result.Error):
              this.messages.showMessages(response.message, 'ERROR');
          }
        }
      );
    } else {
      this.getproductsIn.CompanyId = this.listDocumentForm.value.Company;
      this.docService.getProducts(this.getproductsIn).subscribe(
        response => {
          switch (response.result) {
            case (Result.Success):
              this.listProducts = response;
              console.log(this.listProducts);
              
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              break;
            case (Result.Error):
              this.messages.showMessages(response.message, 'ERROR');
          }

        }
      );
    }
  }
  changeProduct() {
    this.getDocumentType();
  }

  getDocumentType() {
    this.ProductsListDT = [];
    if (this.ModalOpen == true) {
      this.ProductListElement.Id = this.loadingdocuments.value.Product;
      this.ProductsListDT.push(this.ProductListElement);
      this.getDocumentsType.ListProductBE = this.ProductsListDT;
      this.docService.getDocumentType(this.getDocumentsType).subscribe(
        response => {
          switch (response.result) {
            case (Result.Success):
              this.listTypeDocumentsModal = response;
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              break;
            case (Result.Error):
              this.messages.showMessages(response.message, 'ERROR');
          }
        }
      );
    } else {
      this.ProductListElement.Id = this.listDocumentForm.value.Product;
      this.ProductsListDT.push(this.ProductListElement);
      this.getDocumentsType.ListProductBE = this.ProductsListDT;
      this.docService.getDocumentType(this.getDocumentsType).subscribe(
        response => {
          switch (response.result) {
            case (Result.Success):
              this.listTypeDocuments = response;
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              break;
            case (Result.Error):
              this.messages.showMessages(response.message, 'ERROR');
          }
        }
      );
    }
  }
  getDocuments() {
    const request = new GetDocumentIn();
    request.Name = '';
    request.Extension = '';
    request.CreationDate = '';
    request.GuidId = '';
    request.IsActive = true;
    request.CompanyId = Number(this.listDocumentForm.value.Company);
    request.ProductId = Number(this.listDocumentForm.value.Product);
    request.TypeId = Number(this.listDocumentForm.value.TypeDocument);
    request.Identification = this.listDocumentForm.value.Identification;
    request.CaseId = this.listDocumentForm.value.Case;
    request.PageNumber = 1;
    request.PageSize = 10;
    this.docService.getDocuments(request).subscribe(
      response => {
        switch (response.result) {
          case (Result.Success):
            this.listDocuments = response.Documents;
            this.totalRecords = this.listDocuments.length;
            break;
          case (Result.InvalidSession):
            this.invalidSession();
            break;
          case (Result.Error):
            this.messages.showMessages(response.message, 'ERROR');
        }
      }
    );
  }
  downloadFile(e) {
    const request = new GetDocumentIn();
    request.Name = e.data.Name;
    request.Identification = e.data.Identification;
    request.Extension = e.data.Extension;
    request.ProductId = e.data.ProductId;
    request.CreationDate = '';
    request.TypeId = 0;
    request.CompanyId = 0;
    request.GuidId = e.data.GuidId;
    request.IsActive = true;
    request.CaseId = '';
    request.PageNumber = 1;
    request.PageSize = 10;
    this.docService.getDocumentsByte(request).subscribe(
      response => {
        switch (response.result) {
          case (Result.Success):
            const file = response.Documents[0].File;
            const byteCharacters = atob(file);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray]);
            saveAs(blob, e.data.Name + '.' + e.data.Extension);
            break;
          case (Result.InvalidSession):
            this.invalidSession();
            break;
          case (Result.Error):
            this.messages.showMessages(response.message, 'ERROR');
        }
      }
    );
  }
  viewDocument(e){
    const request = new GetDocumentIn();
    request.Name = e.data.Name;
    request.Identification = e.data.Identification;
    request.Extension = e.data.Extension;
    request.ProductId = e.data.ProductId;
    request.CreationDate = '';
    request.TypeId = 0;
    request.CompanyId = 0;
    request.GuidId = e.data.GuidId;
    request.IsActive = true;
    request.CaseId = '';
    request.PageNumber = 1;
    request.PageSize = 10;
    this.docService.getDocumentsByte(request).subscribe(
      response => {
        switch (response.result) {
          case (Result.Success):
            this.ModalTitleView = 'Ver Documento';
            const file = response.Documents[0].File;
            const byteCharacters = atob(file);
            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
              byteNumbers[i] = byteCharacters.charCodeAt(i);
            }
            const byteArray = new Uint8Array(byteNumbers);
            const blob = new Blob([byteArray]);
            if (String(e.data.Extension).toUpperCase() === 'PDF') {
              const newFile = URL.createObjectURL(blob);
              this.pdfSrc = newFile;
              this.displayViewPdf = true;
            } else if (String(e.data.Extension).toUpperCase() === 'PNG' || String(e.data.Extension).toUpperCase() === 'JPG' || String(e.data.Extension).toUpperCase() === 'JPEG') {
              const newFile = URL.createObjectURL(blob);
              this.displayNewDocument = false;
              this.displayImage = true;
              this.imageObject = [{
                image: newFile,
                thumbImage: newFile,
                alt: e.data.name,
                title: e.data.name
              }];
            }
            this.ModalView.open();
            break;
          case (Result.InvalidSession):
            this.invalidSession();
            break;
          case (Result.Error):
            this.messages.showMessages(response.message, 'ERROR');
        }
      }
    );
  }
  handleFileInput(e) {
    const file = e.dataTrasfer ? e.dataTransfer.files[0] : e.target.files[0];
    this.filename = file.name;
    const extention = this.filename.split('.');
    this.extention = extention[1];
    this.name = extention[0];
    const raeder = new FileReader();
    raeder.onload = this._handledReaderLoaded.bind(this);
    raeder.readAsBinaryString(file);
  }
  _handledReaderLoaded(e) {
    const reader = e.target;
    this.file = btoa(reader.result);
  }
  onSubmit() {
    const request = new CreateLoadDocumentIn();
    request.CaseId = this.loadingdocuments.value.Case;
    request.IsActive = true;
    request.ProductId = Number(this.loadingdocuments.value.Product);
    request.TypeId = Number(this.loadingdocuments.value.TypeDocument);
    request.identification = this.loadingdocuments.value.Identification;
    request.File = this.file;
    request.Extension = this.extention;
    request.Name = this.name;
    request.File = this.file;
    request.SignActive = this.loadDocumentProducts.includes(+this.loadingdocuments.get('Product').value) ? true : null;
    if (request.CaseId === null && request.identification === null) {
      this.messages.showMessages('Datos incompletos, favor validar # caso o Identificacioón', 'ERROR');
    } else if (request.File === undefined) {
      this.messages.showMessages('No se ha cargado ningun archivo', 'ERROR');
    } else {
      this.docService.loadDocument(request).subscribe(
        response => {
          switch (response.result) {
            case (Result.Success):
              this.messages.showMessages('Documento cargado correctamente', 'SUCCESS');
              this.loadingdocuments.reset();
              this.file = null;
              this, this.filename = '';
              this.Modal.closeModal();
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              break;
            case (Result.Error):
              this.loadingdocuments.reset();
              this.file = null;
              this, this.filename = '';
              this.messages.showMessages(response.message, 'ERROR');
          }
        }
      );
    }
  }
  openModal() {
    this.ModalTitle = 'Cargar Documento';
    this.ModalAceptText = 'Cargar';
    this.ModalOpen = true;
    this.Modal.open();
    this.displayNewDocument = true;
  }
  closeModal() {
    this.hasError = false;
    this.ModalOpen = false;
    this.loadingdocuments.reset();
    this.listProductsModal = new GetProducts();
    this.listTypeDocumentsModal = new GetDocumentType();
    this.displayImage = false;
    this.displayViewPdf = false;
    this.pdfSrc = '';
    this.imageObject = [];
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

  onCustomAction($event) {
    switch ($event.action) {
      case 'download':
        this.downloadFile($event);
        break;
      case 'view':
        this.viewDocument($event);
        break;
      case 'edit':
        this.openUpdateSignModal($event);
        break;
      default:
        break;
    }
  }

  updateSignStatus() {
    const updateSignStatus = new UpdateSignStatusIn();
    updateSignStatus.GuidId = this.signData.GuidId;
    console.log(this.signData.GuidId);
    updateSignStatus.SignActive = this.updateSignForm.get('activate').value;
    this.docService.updateSignStatus(updateSignStatus).subscribe(response => {
      if (response.result === Result.Success) {
        this.messages.showMessages('loadDocument.updateSign.updateSign.success', 'SUCCESS');
      }
      else {
        this.messages.showMessages('loadDocument.updateSign.updateSign.error', 'ERROR');
      }
      this.UpdateSignModal.closeModal();
    });
  }

  openUpdateSignModal($event) {
    this.signData = $event.data;
    this.UpdateSignModal.open();
  }

  closeUpdateSignModal() {
    this.UpdateSignModal.closeModal()
  }

  getPermission() {
    let permissionIn = new GetPermissionByRoleIn();
    let user: User = JSON.parse(localStorage.getItem('user_adm'));
    let user2: User = JSON.parse(localStorage.getItem('user_info'));
    permissionIn.role = user.usr_role;
    this.permissionProxy.getPermissionByRole(permissionIn).subscribe((response) => {
      if(response.result === Result.Success){
        this.actions = response.listPermissions;
        this.canUpdateSign = this.actions.some(x => x.pm_code === "53");
        this.canLoadDoc = this.actions.some(x => x.pm_code === "54");
      }
    })
  }

}
