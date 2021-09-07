import { Component, OnInit, ViewChild } from '@angular/core';
import { Result } from '../../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { FormGroup } from '@angular/forms';
import { OfferFormsService } from '../../Services/offer.forms.service';
import { Profile } from '../../../../../Commons/Entities/profile';
import { Actions } from '../../../../../Commons/Entities/actions';
import { ActionByProfile } from '../../../../../Commons/Entities/actionByProfile';
import { Offer } from '../../../../../Commons/Entities/offer';
import { Agreement } from '../../../../../Commons/Entities/agreement';
import { Client } from '../../../../../Commons/Entities/client';
import { Campaign } from '../../../../../Commons/Entities/campaing';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('smartTableDetail', { static: false }) smartTableDetail: SmartTableComponent;
  @ViewChild('showModal', { static: false }) showModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;

  filterForm: FormGroup;
  totalRecords = 0;
  totalRecordsDetail = 0;
  currentEnrID = 0;
  offerList: Array<Offer> = new Array<Offer>();
  editForm: FormGroup;
  settings: any = [];
  settingsDetail: any;
  pdfModalTitle = 'queryEnrollment.modalPdf.modalTtile';
  showModalTitle = 'offer.modal.modalTtile';
  showModalAceptText = 'offer.modal.modalAceptButton';
  showModalCloseText = 'offer.modal.modalCancelButton';
  pdf: any;
  showPdF = false;
  pdfDownload: any;
  hasError;
  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };

  constructor(private offerFormsService: OfferFormsService,private translateService: TranslateService) { }

  ngOnInit() {

    this.filterForm = this.offerFormsService.getFilterForm();
    
    //this.documentTypesList = this.getDocumentTypes();
    this.settings = this.offerFormsService.getConfigDataTable();
    //this.settingsDetail = this.offerFormsService.getConfigDataTableDetail();
    this.getEnrollmentsFilters();
    this.editForm = this.offerFormsService.getEditForm();

    
  }

  getDocumentTypes() {
    //   return this.commonService.getDocumentTypes(new GetDocumentTypesIn()).pipe(
    //     map(response => {
    //       if (response.result === Result.Success) {
    //         return response.documentTypes;
    //       } else {
    //         this.messages.showMessages('administration.authentication.login.documentTypes.error.messageError', 'ERROR');
    //         return new Array<DocumentTypes>();
    //       }
    //     })
    //   );
  }

  getEnrollmentsFilters(pageNumber: number = 1, orderBy: string = '', orderDirection: string = '') {
  
    // todo:borrar

    

    const objOffer = new Offer();
    const objagreement = new Agreement();
    const objclient = new Client();
    const objcampaign = new Campaign();
    const listOffer = new Array<Offer>();
    let att: any;
    objclient.cli_document_number = '1015487998'
    objclient.cli_first_name = 'pablo';
    objcampaign.cam_name_campaign = 'enero 2020';
    objagreement.agr_creation_date = new Date();
    objOffer.offID = (this.offerList !== undefined) ? this.offerList.length + 1 : 1;
    objOffer.client = objclient;
    objOffer.campaign = objcampaign;
    objOffer.agreement = objagreement; 
    objOffer.off_step = 'inicio';

    this.totalRecords = (this.offerList !== undefined) ? this.offerList.length + 1 : 1;
    listOffer.push(objOffer);
    // this.offerList = listOffer;

    of(listOffer).pipe(delay(1000)).subscribe(result => {
      this.offerList = result;
    });
    // END

    //   const enrollmentIn = new GetEnrollmentsFiltersIn();
    //   enrollmentIn.typeDocument = this.filterForm.get('filterDocumentType').value;
    //   enrollmentIn.documentNumber = this.filterForm.get('filterDocumentNumber').value;
    //   enrollmentIn.status = this.filterForm.get('filterStatus').value;
    //   enrollmentIn.dateStart = this.filterForm.get('filterdateStart').value;
    //   enrollmentIn.dateEnd = this.filterForm.get('filterdateEnd').value;

    //   enrollmentIn.pageSize = environment.pageSize;
    //   enrollmentIn.pageNumber = pageNumber;
    //   enrollmentIn.orderBy = orderBy;
    //   enrollmentIn.orderDirection = orderDirection;
    //   debugger
    //   this.enrollmentService.getEnrollmentsFilters(enrollmentIn).subscribe(response => {
    //     if (response.result === Result.Success) {
    //       this.totalRecords = response.totalRecords;
    //       this.enrollmentsList = response.enrollments;
    //       this.smartTable.setPage(pageNumber);

    //     } else {
    //       this.messages.showMessages('users.usersFO.getUser.messageError', 'ERROR');
    //     }
    //   });
  }

  getFingerprintsHistory(enrID: number, pageNumber: number = 1, orderBy: string = '', orderDirection: string = '') {
    //   const getFingerprintsHistoryIn = new GetFingerprintsHistoryIn();
    //   getFingerprintsHistoryIn.enrollmentID = enrID;

    //   this.enrollmentService.getFingerprintsHistory(getFingerprintsHistoryIn).subscribe(response => {
    //     if (response.result === Result.Success) {
    //       this.totalRecordsDetail = response.totalRecords;
    //       this.fingerprintsHistoryList = response.fingerprintsHistories;
    //       this.smartTableDetail.setPage(pageNumber);
    //     } else {
    //       this.messages.showMessages('users.usersFO.getUser.messageError', 'ERROR');
    //     }
    //   });
  }

  backToList() {
    this.showPdF = false;
  }

  downloadReport() {
    //   const request = new GetGenerateEnrollmentGridReportIn();
    //   request.typeDocument = this.filterForm.get('filterDocumentType').value;
    //   request.documentNumber = this.filterForm.get('filterDocumentNumber').value;
    //   request.status = this.filterForm.get('filterStatus').value;
    //   request.dateStart = this.filterForm.get('filterdateStart').value;
    //   request.dateEnd = this.filterForm.get('filterdateEnd').value;

    //   this.service.getGenerateEnrollmentGridReport(request).subscribe(response => {
    //     if (response.result === Result.Success) {
    //       const mediaType = 'application/xls';
    //       const filename = 'EnrollmentReport';
    //       const blob = BlobHelper.buildBlob(response.report, 'xls');
    //       BlobHelper.downloadBlob(blob, filename, mediaType, 'xls');
    //     } else {
    //       this.messages.showMessages('company.getCompany.messageError', 'ERROR');
    //     }
    //   });
  }

  downloadPdf() {
    //   const mediaType = 'application/pdf';
    //   const filename = 'PDFHistory';
    //   const blob = BlobHelper.buildBlob(this.pdfDownload, 'pdf');
    //   BlobHelper.downloadBlob(blob, filename, mediaType, 'pdf');
  }

  openModal(event) {
      this.showPdF = false;
      //this.currentEnrID = event.data.enrID;
      //this.currentEnrrolment = event.data;
      //this.getFingerprintsHistory(event.data.enrID);
      this.showModal.open();
  }

  openModalPdf(event) {
    this.pdfDownload = event.data.fph_pdf;
    //this.pdf = BlobHelper.base64ToArrayBuffer(event.data.fph_pdf);
    this.showPdF = true;
  }

  confirmDelete(event: any) {
    this.events.eventAlertModal.doIt = 'deleteItem';
    this.events.eventAlertModal.title = this.translateService.instant('general.label.deleteRegister');
    this.events.eventAlertModal.message =
      this.translateService.instant('campaign.grid.columnsName.confirmDeleteMessage') + ' ' + event.data.pro_name + '?';
    this.events.eventGrid.event = event;
    this.alertModal.open();
  }

  changePage($event: any) {
    //  this.getEnrollmentsFilters($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getEnrollmentsFilters(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  changePageDetail($event: any) {
    this.getFingerprintsHistory(this.currentEnrID, $event.$event.page,
      this.smartTableDetail.sortColumnId, this.smartTableDetail.sortDirection);
  }

  sortDataTableDetail($event: any) {
    this.getFingerprintsHistory(this.currentEnrID);
  }

}