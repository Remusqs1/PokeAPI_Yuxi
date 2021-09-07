import { Injectable } from '@angular/core';
import { Proxy } from '../../Commons/Services/proxy';
import { map } from 'rxjs/operators';
import { GetCompanies, Company } from '../Components/MethodParameters/GetCompanies';
import { GetProducts, Products, ProductsList } from '../Components/MethodParameters/GetProducts';
import { GetDocumentType, DocumentType } from '../Components/MethodParameters/GetDocumentType';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetDocumentOut } from '../Components/MethodParameters/GetDocumentOut';
import * as moment from 'moment';
import { updateSignStatusOut } from '../Components/MethodParameters/updateSignStatusOut';

@Injectable({
  providedIn: 'root'
})
export class DocumentManagerService {

  // ListProd: Array<ProductsList> =[{Id:6,Name:'',Code:'',CompanyId:0,IsActive:true, Table:'', ListDocumentTypeBE :null}];
  // RequestDocumentTypes : DocumentType={ PageNumber:1 , PageSize:10 , Id:0, Name:'',Code :'',  IsActive :true , ListProductBE : this.ListProd };

  constructor(private proxy: Proxy, private formBuilder: FormBuilder) {
  }


  getCompanies(request) {
    return this.proxy.executePost('DocumentManager/getCompanies', request, null)
      .pipe(map((response) => {
        return this.mapGetCompaniesOut(response);
      }));
  }
  getProducts(request) {
    return this.proxy.executePost('DocumentManager/getProducts', request, null)
      .pipe(map((response) => {
        return this.mapGetProductsOut(response);
      }));
  }
  getDocumentType(request) {
    return this.proxy.executePost('DocumentManager/getDocumentType', request, null)
      .pipe(map((response) => {
        return this.mapGetDocumentTypesOut(response);
      }));
  }
  loadDocument(request) {
    console.log(request);
    return this.proxy.executePost('DocumentManager/addDocument', request, null)
      .pipe(map((response) => {
        return this.mapLoadDocumentOut(response);
      }));
  }
  getDocuments(request) {
    return this.proxy.executePost('DocumentManager/getDocument', request, null)
      .pipe(map((response) => {
        return this.mapGetDocumentsOut(response);
      }));
  }
  getDocumentsByte(request) {
    return this.proxy.executePost('DocumentManager/getDocumentWithByte', request, null)
      .pipe(map((response) => {
        return this.mapGetDocumentsByteOut(response);
      }));
  }
  updateSignStatus(request) {
    return this.proxy.executePost('DocumentManager/updateSignStatus', request, null)
      .pipe(map((response) => {
        return this.mapUpdateSignStatusOut(response);
      }));
  }
  mapUpdateSignStatusOut(response: any) {
    return <updateSignStatusOut>response;
  }
  mapGetCompaniesOut(response: any) {
    return <GetCompanies>response;
  }
  mapGetProductsOut(response: any) {
    return <GetProducts>response;
  }
  mapGetDocumentTypesOut(response: any) {
    return <GetDocumentType>response;
  }
  mapLoadDocumentOut(response: any) {
    return <any>response;
  }
  mapGetDocumentsOut(response: any) {
    return <GetDocumentOut>response;
  }
  mapGetDocumentsByteOut(response: any) {
    return <any>response;
  }
  getLoadDocument(): FormGroup {
    const homeConfigForm = this.formBuilder.group({
      Company: [, [Validators.required]],
      Product: [, [Validators.required]],
      TypeDocument: [, [Validators.required]],
      Identification: [,],
      Case: [,]
    });
    return homeConfigForm;
  }
  getListDocument(): FormGroup {
    const listDocumentForm = this.formBuilder.group({
      Company: [, [Validators.required]],
      Product: [, [Validators.required]],
      TypeDocument: [, [Validators.required]],
      Identification: [,],
      Case: [,]
    });
    return listDocumentForm;
  }
  getConfigDataTable() {

    const settings = {
      actions: {
        custom: [
          {
            name: 'download',
            icon: '<i class="ti-import text-credi m-r-10"></i>',
            title: "Descargar"
          },
          {
            name: 'view',
            icon: '<i class="ti-eye text-credi m-r-10"></i>',
            title: "Ver"
          },
          {
            name: 'edit',
            icon: '<i class="ti-pencil text-credi m-r-10"></i>',
            title: "editar"
          }
        ],
        add: false,
        edit: false,
        copy: false,
        delete: false,
        position: 'left',
        columnTitle: '',
      },
      hideSubHeader: true,
      mode: 'external',
    };

    const columns: any = {
      CompanyName: {
        title: 'document.grid.columnsName.company',
        filter: false
      },
      ProductName: {
        title: 'document.grid.columnsName.product',
        filter: false
      },
      Name: {
        title: 'document.grid.columnsName.name',
        filter: false
      },
      CaseId: {
        title: 'document.grid.columnsName.case',
        filter: false
      },
      Identification: {
        title: 'document.grid.columnsName.identification',
        filter: false
      },
      TypeName: {
        title: 'document.grid.columnsName.typeDocument',
        filter: false
      },
      CreationDate: {
        title: 'document.grid.columnsName.loadDate',
        filter: false,
        valuePrepareFunction: (resp) => {
          return moment(resp).format('YYYY-MM-DD');
        }
      }
    };
    (<any>settings).columns = columns;
    return settings;
  }

  getSignDataTable() {

    const settings = {
      actions: {
        custom: [
          {
            name: 'download',
            icon: '<i class="ti-import text-credi m-r-10"></i>',
            title: "Descargar"
          },
          {
            name: 'view',
            icon: '<i class="ti-eye text-credi m-r-10"></i>',
            title: "Ver"
          },
          {
            name: 'edit',
            icon: '<i class="ti-pencil text-credi m-r-10"></i>',
            title: "editar"
          }
        ],
        add: false,
        edit: false,
        copy: false,
        delete: false,
        position: 'left',
        columnTitle: '',
      },
      hideSubHeader: true,
      mode: 'external',
    };

    const columns: any = {
      CompanyName: {
        title: 'document.grid.columnsName.company',
        filter: false
      },
      ProductName: {
        title: 'document.grid.columnsName.product',
        filter: false
      },
      Name: {
        title: 'document.grid.columnsName.name',
        filter: false
      },
      CaseId: {
        title: 'document.grid.columnsName.case',
        filter: false
      },
      Identification: {
        title: 'document.grid.columnsName.identification',
        filter: false
      },
      TypeName: {
        title: 'document.grid.columnsName.typeDocument',
        filter: false
      },
      CreationDate: {
        title: 'document.grid.columnsName.loadDate',
        filter: false,
        valuePrepareFunction: (resp) => {
          return moment(resp).format('YYYY-MM-DD');
        }
      },
      SignActive: {
        title: 'document.grid.columnsName.signActive',
        filter: false
      },
      SignDateUpdate: {
        title: 'document.grid.columnsName.signDateUpdate',
        filter: false
      }
    };
    (<any>settings).columns = columns;
    return settings;
  }

  getActivateSignForm(): FormGroup {
    const form = this.formBuilder.group({
      activate: [{ value: undefined, disabled: false }, [Validators.required, Validators.nullValidator]],
    });
    return form;
  }
}
