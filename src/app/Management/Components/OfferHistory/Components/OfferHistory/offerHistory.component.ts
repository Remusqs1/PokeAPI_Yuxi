import { Component, OnInit, ViewChild } from '@angular/core';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { ModalBasicComponent } from '../../../../../Shared/Components/Modal/modal.component';
import { FormGroup } from '@angular/forms';
import { Offer } from '../../../../../Commons/Entities/offer';
import { TranslateService } from '@ngx-translate/core';
import { OfferHistoryFormsService } from '../../Services/offerHistory.forms.service';
import { GetOffersHistoryFilterMoIn } from '../../MethodParameters/getOffersHistoryFilterMoIn';

import { NgbModal, ModalDismissReasons, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { Result } from '../../../../../Commons/Classes/result';
import { GetHistoricStepMoIn } from '../../MethodParameters/getHistoricStepMoIn';
import { HistoricStep } from '../../../../../Commons/Entities/historicStep';
import { OfferHistoryService } from '../../Services/offerHistory.service';


@Component({
  selector: 'app-offer-history',
  templateUrl: './offerHistory.component.html',
  styleUrls: ['./offerHistory.component.css']
})
export class OfferHistoryComponent implements OnInit {

  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('smartTableDetail', { static: false }) smartTableDetail: SmartTableComponent;
  @ViewChild('showModal', { static: false }) showModal: ModalBasicComponent;
  @ViewChild('detailMessageModal', { static: false }) detailMessageModal: ModalBasicComponent;
  @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;

  showLoader: boolean;
  documentNumber: string;
  labelNoRecords: string;

  totalRecords: number = 0;
  offersList: Array<Offer>;
  labelTotalRecords: string = "Total de ofertas"

  showClient: boolean = false;

  filterForm: FormGroup;
  totalRecordsDetail = 0;
  currentEnrID = 0;
  offerList: Array<Offer> = new Array<Offer>();
  editForm: FormGroup;
  settings: any = [];
  settingsDetail: any;
  settingsmessage: any;
  pdfModalTitle = 'queryEnrollment.modalPdf.modalTtile';
  showModalTitle = 'offerHistory.modal.modalTtile';
  showModalAceptText = 'offerHistory.modal.modalAceptButton';
  showModalCloseText = 'offerHistory.modal.modalCancelButton';
  showModalMessageTitle = 'offerHistory.modal.modalMessageTtile';
  showPdF = false;
  pdfDownload: any;
  modalref: NgbModalRef;
  showTable: boolean = false;

  historicStepList: Array<HistoricStep> = new Array<HistoricStep>();


  nombreHistorial: any;
  documentoHistorial: any;
  campaniaAsociada: any;


  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };

  constructor(private offerFormsService: OfferHistoryFormsService, private translateService: TranslateService,
    private offerHistoryService: OfferHistoryService) { }

  ngOnInit() {
    this.filterForm = this.offerFormsService.getFilterForm();
    this.settings = this.offerFormsService.getConfigDataTable();
    this.getOffersHistory(0);
    //this.settingsDetail = this.offerFormsService.getConfigDataTableDetail();
    this.settingsmessage = this.offerFormsService.getConfigDataTableDetailMessage();
    // this.editForm = this.offerFormsService.getEditForm();
  }

  getOffersHistory(pageNumber: number = 1, orderBy: string = '', orderDirection: string = '', action: string = '') {

    if (orderBy === "") {
      orderBy = "offID";
      orderDirection = "ASC";
    }
    this.showLoader = true;
    let profileFilter = new GetOffersHistoryFilterMoIn();
    profileFilter.documentNumber = this.filterForm.controls.filterDocumentNumber.value;
    profileFilter.offStatus = this.filterForm.controls.filterStatus.value;
    // profileFilter.comID = +this.user.usr_id_company;
    profileFilter.comID = 1;
    profileFilter.offID = 0;
    profileFilter.pageSize = 10;
    profileFilter.pageNumber = pageNumber;
    profileFilter.orderBy = orderBy;
    profileFilter.orderDirection = orderDirection;
    this.offerHistoryService.getOffersHistoryFilter(profileFilter).subscribe(response => {
      if (response.result == Result.Success) {
        this.totalRecords = response.totalRecords;
        this.offersList = response.offers;
        console.log('offerslist',this.offersList);
        if (this.totalRecords > 0) {
          this.showClient = true;
        } else {
          this.showClient = false;
          if (action === '') {
            this.messages.showMessages("No se encontraron ofertas.", "WARNING");
          }
        }
      } else {
        if (action === '') {
          this.messages.showMessages("No es posible consultar las ofertas en este momento.", "ERROR");
        }
      }
      if (action === 'unblock') {
        this.Closed();
      }
      //this.showLoader = false;
    });
  }

  getHistoricStep(item,pageNumber: number = 1, orderBy: string = '', orderDirection: string = '', action: string = '') {
    this.showLoader = true;
    let historicFilter = new GetHistoricStepMoIn();
    historicFilter.offID = item;
    this.offerHistoryService.getHistoricStep(historicFilter).subscribe(response => {
      if (response.result == Result.Success) {
        this.historicStepList = response.historicSteps;
        this.showLoader = false;
      } else {
        this.showLoader = false;
        var a = 1;
      }

      this.showLoader = false;
    });
  }

  customButtons(event: any) {
    if (event.action === 'Detail') {
      this.openModal(event);
    } else if (event.action === 'DetailMessage') {
      this.openModalDetalMessage(event);
    }
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

  Closed() {
    this.modalref.close('closed');
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
    this.showTable = true;
    this.showPdF = false;
    //this.currentEnrID = event.data.enrID;
    //this.currentEnrrolment = event.data;
    //this.getFingerprintsHistory(event.data.enrID);
    this.showModal.open();
    this.nombreHistorial = event.data.client.cli_full_name;
    this.documentoHistorial = event.data.client.cli_document_number;
    this.campaniaAsociada = event.data.campaign.cam_name_campaign;
    this.getHistoricStep(event.data.offID);
  }

  openModalDetalMessage(event: any) {
    this.detailMessageModal.open();
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
    this.getOffersHistory($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getOffersHistory(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  sortDataTableDetail($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getHistoricStep(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  changePageDetail($event: any) {
    this.getFingerprintsHistory(this.currentEnrID, $event.$event.page,
      this.smartTableDetail.sortColumnId, this.smartTableDetail.sortDirection);
  }

  sortDataTableMessage($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getFingerprintsHistory(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

}
