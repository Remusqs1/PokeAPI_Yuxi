import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';

import { CasesFormService } from './../../../../Services/cases.form.service';
import { CasesService } from './../../../../Services/cases.service';
import { GetRequestFiltersIn } from '../MethodParameters/GetRequestFiltersIn';

import { environment } from '../../../../../../environments/environment';
import {
  GetRequestFiltersOut,
  RequestFilterOut,
} from '../MethodParameters/GetRequestFiltersOut';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import {
  ReassignRequestIn,
  NewAdviser,
  ReassignRequest,
} from '../MethodParameters/ReassignRquestIn';
import { Result } from '../../../../../Commons/Classes/result';
import { Router } from '@angular/router';
import { GetCasesByDocumentIn } from '../MethodParameters/GetCasesByDocumentIn';
import { Company } from '../../../../../Commons/Classes/baseIn';

@Component({
  selector: 'app-list',
  templateUrl: './listCases.component.html',
})
export class ListCasesComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  @ViewChild('editCaseModal', { static: false })
  editCaseModal: ModalBasicComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  public filterForm: FormGroup;
  public formEditCase: FormGroup;
  public submitted = false;
  public advisersList: any[] = [];
  tableSettings: any;
  listCasesByAdviser: any[] = [];
  totalRecords: number;
  public userCase: RequestFilterOut;

  editCaseModalTitle = 'cases.lables.modal.titleModal';
  editCaseModalAceptText = 'cases.lables.modal.acceptModal';
  editCaseModalCloseText = 'cases.lables.modal.closeModal';

  constructor(
    private casesFormServices: CasesFormService,
    private casesServices: CasesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.filterForm = this.casesFormServices.getFilterForm();
    this.formEditCase = this.casesFormServices.getFormEditCase();
    this.getAdvisers();
    this.tableSettings = this.casesFormServices.getConfigDataTable();
    //console.log(this.listCasesByAdviser);
  }

  searchByDocument(value) {
    let getCasesByDocumentIn = new GetCasesByDocumentIn();

    getCasesByDocumentIn.Identification = value;
    getCasesByDocumentIn.currentUser = JSON.parse(
      localStorage.getItem('user_info')
    );
    getCasesByDocumentIn.currentSesId = localStorage.getItem('sesId_adm');

    this.casesServices.GetCasesByDocument(getCasesByDocumentIn);
    //Se deja pendiente ya que hay que solicitar a SIX el metodo de consulta de casos por documento de identidad.
    console.warn('FEATURE PENDIENTE DESARROLLO, ESPERA RESPUESTA PROVEEDOR');
  }

  editAdviserCase(event: any, newAdviserId) {
    console.log(
      this.advisersList.find((m) => m.idUser == newAdviserId).fullName
    );
    this.userCase = Object.assign(new RequestFilterOut(), event.data);

    this.formEditCase.controls.modal_FirstName.setValue(
      this.userCase.FirstName
    );
    this.formEditCase.controls.modal_SecondName.setValue(
      this.userCase.SecondName
    );
    this.formEditCase.controls.modal_FirstSurname.setValue(
      this.userCase.Surname
    );
    this.formEditCase.controls.modal_SecondSurname.setValue(
      this.userCase.SecondSurname
    );
    this.formEditCase.controls.modal_CreationDate.setValue(
      this.userCase.CreationDate
    );
    this.formEditCase.controls.modal_FilingNumber.setValue(
      this.userCase.FilingNumber
    );
    this.formEditCase.controls.modal_Mobile.setValue(this.userCase.Mobile);
    this.formEditCase.controls.modal_Status.setValue(this.userCase.Status);
    this.formEditCase.controls.modal_CurrentAdviser.setValue(
      this.advisersList.find((m) => m.idUser == newAdviserId).fullName
    );
    this.formEditCase.controls.modal_NewAdviser.setValue(0);
    this.formEditCase.controls.modal_CaseId_Hidden.setValue(
      this.userCase.FilingNumber
    );
    this.formEditCase.controls.modal_CurrentAviserId_Hidden.setValue(
      this.advisersList.find((m) => m.idUser == newAdviserId).idUser
    );
    this.formEditCase.controls.modal_Company.setValue(Company[this.userCase.CompanyId]);
    this.editCaseModal.open();
  }

  getAdvisers(): any {
    this.casesServices.getAdvisers().subscribe((response) => {
      if (response.result === Result.Success) {
        this.advisersList = response['Advisers'];
      } else if (response.result === Result.InvalidSession) {
        this.invalidSession();
      }
    });
  }

  confirmEditCase() {
    const CURRENT_ADVISER_ID = <number>(
      this.formEditCase.value.modal_CurrentAviserId_Hidden
    );
    const NEW_ADVISER_ID = <number>this.formEditCase.value.modal_NewAdviser;
    if (CURRENT_ADVISER_ID == NEW_ADVISER_ID) {
      this.editCaseModal.closeModal();
      this.messages.showMessages('cases.message.errors.sameAdviser', 'ERROR');
    } else {
      let reassignRequestIn = new ReassignRequestIn();
      reassignRequestIn.NewAdviser = new NewAdviser();
      reassignRequestIn.ReassignRequest = new ReassignRequest();

      reassignRequestIn.currentUser = JSON.parse(
        localStorage.getItem('user_info')
      );

      //Datos personales del nuevo asesor
      const NEW_ADVISER = this.advisersList.find(
        (user) => user.idUser == NEW_ADVISER_ID
      );
      reassignRequestIn.NewAdviser.AdviserId = this.formEditCase.value.modal_NewAdviser;
      reassignRequestIn.NewAdviser.FullName = NEW_ADVISER.fullName;
      reassignRequestIn.NewAdviser.ContactEmail = NEW_ADVISER.contactEmail;
      reassignRequestIn.NewAdviser.NumeroIdentificacion = NEW_ADVISER.SNumeroIdentificacion;
      reassignRequestIn.NewAdviser.SCodigoSIIF = NEW_ADVISER.SCodigoSIIF;
      reassignRequestIn.NewAdviser.IdTipoFuerzaComercial = NEW_ADVISER.idIDTipoFuerzaComercial;
      reassignRequestIn.NewAdviser.Domain = NEW_ADVISER.domain;

      reassignRequestIn.FilingNumber = this.formEditCase.value.modal_CaseId_Hidden;
      reassignRequestIn.OldAviserId = this.formEditCase.value.modal_CurrentAviserId_Hidden;

      reassignRequestIn.ReassignRequest.adviserDocumentNumber = NEW_ADVISER_ID.toString();
      reassignRequestIn.ReassignRequest.requestId = this.formEditCase.value.modal_CaseId_Hidden;
      reassignRequestIn.ReassignRequest.company = this.formEditCase.value.modal_Company;

      console.log("reassignRequestIn.FilingNumber", reassignRequestIn.FilingNumber);

      if (reassignRequestIn.FilingNumber != null) {
        this.casesServices
          .ReassingRequest(reassignRequestIn)
          .subscribe((response) => {
            console.log('RESPUESTA');
            console.log(response);
            console.log(response.result);

            if (response.result === Result.Success) {


              this.editCaseModal.closeModal();
              this.formEditCase.clearValidators();
              this.messages.showMessages(
                'cases.message.success.adviserChanged',
                'SUCCESS'
              );
              this.getRequestfilters(
                this.formEditCase.value.modal_CurrentAviserId_Hidden,
                1,
                'usrID',
                'ASC'
              );
            } else if (response.result === Result.NoRecords) {
              console.log('NoRecords');

              this.editCaseModal.closeModal();
              this.messages.showMessages(
                'cases.message.errors.noRecords',
                'ERROR'
              );
            } else if (response.result === Result.Error) {


              this.editCaseModal.closeModal();
              this.messages.showMessages(
                'cases.message.errors.noRecords',
                'ERROR'
              );
            } else if (response.result === Result.InvalidSession) {
              this.invalidSession();
            }
          });
      } else {
        this.editCaseModal.closeModal();
        this.messages.showMessages('cases.lables.modal.filingNumberIsNull', 'WARNING')
      }

    }
  }

  closeEditCase() {
    this.userCase = new RequestFilterOut();
    this.filterForm = this.casesFormServices.getFilterForm();
  }

  changePage($event, adviserId) {
    this.getRequestfilters(adviserId, $event.$event.page);
  }

  getRequestfilters(
    adviserId: string,
    pageNumber: number = 1,
    orderBy: string = 'usrID',
    orderDirection: string = 'ASC'
  ) {


    let getRequestFiltersIn = new GetRequestFiltersIn();
    getRequestFiltersIn.currentUser = JSON.parse(
      localStorage.getItem('user_info')
    );
    getRequestFiltersIn.adviserId = adviserId;
    getRequestFiltersIn.orderBy = orderBy;
    getRequestFiltersIn.orderDirection = orderDirection;
    getRequestFiltersIn.pageSize = environment.pageSize;
    getRequestFiltersIn.download = false;
    getRequestFiltersIn.pageNumber = pageNumber;
    getRequestFiltersIn.currentSesId = localStorage.getItem('sesId_adm');

    // consulta a API
    this.casesServices.getRequestFilters(getRequestFiltersIn)
      .subscribe((response) => {
        console.log("getRequestFiltersIn", response);
        this.listCasesByAdviser = response.cases;
        this.totalRecords = response.totalRecords;
      });

    // //data de prueba
    // let g = new GetRequestFiltersOut();
    // g.RequestFilters = [];
    // for (let i = 0; i < 23; i++) {
    //   g.RequestFilters.push(this.testData(i));
    // }

    // this.listCasesByAdviser = <any>g.RequestFilters;
    // console.log(this.listCasesByAdviser);
    // this.totalRecords = 23;
  }

  testData(f: number): RequestFilterOut {
    let g = new RequestFilterOut();
    g.CreationDate = '2010-05-20';
    g.TypeId = 1;
    g.Id = 'asd';
    g.FirstName = 'primer';
    g.SecondName = 'second';
    g.Surname = 'surname';
    g.SecondSurname = 'secondSurname';
    g.Mobile = '3213213213';
    g.FilingNumber = f.toString();
    g.CompanyId = 1;
    g.Status = 'status';
    g.ApplicantId = f;

    return g;
  }

  get c() {
    return this.filterForm.controls;
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
