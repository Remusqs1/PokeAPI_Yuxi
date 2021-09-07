import { OnInit, ViewChild, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { TranslateService } from '@ngx-translate/core';
import { DocumentType } from '../../../../Commons/Entities/documentType';
import { GetDocumentTypesIn } from '../../../../Commons/MethodParameters/getDocumentTypesIn';
import { Result } from '../../../../Commons/Classes/result';
import { CommonService } from '../../../../Commons/Services/common.service';
import { environment } from '../../../../../environments/environment';
import { GlobalServicesFormsService } from '../Services/globalServices.form.service';
import { ModalBasicComponent } from '../../../../Shared/Components/Modal/modal.component';
import { SdTime } from '../../../../Commons/Components/TimePicker/sd-time';
import { GetServicesIn } from '../MethodParameters/getServicesIn';
import { ServiceService } from '../Services/services.service';
import { UpdateServiceIn } from '../MethodParameters/updateServiceIn';
import { Service } from '../../../../Commons/Entities/service';
import { Utilities } from '../../../../Commons/Classes/utilities';


const pageSize = environment.pageSize;

@Component({
  selector: 'app-globalServices',
  templateUrl: './globalServices.component.html',
  styleUrls: ['./globalServices.component.css'],
})
export class GlobalServicesComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
  documentTypesList: Array<DocumentType>;
  filterForm: FormGroup;
  labelNoRecords: string;
  globalServicesList: Array<Service>;
  serID: string;
  totalRecords = 0;
  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };
  createModalTitle = 'users.usersMO.createUser.modalTitle';
  editModalTitle = 'generalServices.edit.editModalTitle';
  searchUserModalTitle = 'users.usersMO.searchUser.modalTitle';
  showButtons = false;
  showLoader = false;
  timeInitial: SdTime;
  timeFinal: SdTime;
  hasError: boolean = false;
  editModalAceptText = 'generalServices.edit.modalAceptButton';
  editModalCloseText = 'generalServices.edit.modalCancelButton';
  createModalAceptText = 'users.usersMO.createUser.modalAceptButton';
  createModalCloseText = 'users.usersMO.createUser.modalCancelButton';
  settings: any;
  editForm: FormGroup;
  days: Array<number> = new Array<number>();
  limitedDays: boolean = false;
  limitedHours: boolean = false;
  utils: Utilities;
  constructor( private commonService: CommonService, private globalServicesForm: GlobalServicesFormsService, 
               private servicesProxy: ServiceService) { }

  ngOnInit() {
    this.utils = new Utilities();
    this.editForm = this.globalServicesForm.getFilterForm();
    this.settings = this.globalServicesForm.getConfigDataTable(); 
    this.getServices();  
  }

  changePage($event: any) {
    this.getServices($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getServices(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  editGlobalServices(events){    
    this.serID = events.data.serID;
    this.editForm.controls.servicesName.setValue(events.data.ser_name);
    this.editForm.controls.stateServices.setValue(events.data.ser_status);
    this.editForm.controls.amounMin.setValue(events.data.ser_max_amount);
    if(events.data.ser_days_operation !== null && events.data.ser_days_operation !== ''){ 
      this.days = events.data.ser_days_operation.split("-");
      this.limitedDays = true;
    } else {
      this.limitedDays = false;
    }
    if(events.data.ser_initial_schedule !== null){
      this.limitedHours = true;
    }
    if(events.data.ser_initial_schedule !== null){
      this.timeInitial = new SdTime(
        this.utils.tryToInteger(
          events.data.ser_initial_schedule.split(":")[0]
        ),
        this.utils.tryToInteger(
          events.data.ser_initial_schedule.split(":")[1]
        )
      );
    }
    if(events.data.ser_final_schedule !== null){
      this.timeFinal = new SdTime(
        this.utils.tryToInteger(
          events.data.ser_final_schedule.split(":")[0]
        ),
        this.utils.tryToInteger(
          events.data.ser_final_schedule.split(":")[1]
        )
      );
    }
    this.editModal.open();
  }

  getServices(
    pageNumber: number = 1,
    orderBy: string = '',
    orderDirection: string = ''
  ) {
    const serviceFilter = new GetServicesIn();
    serviceFilter.pageSize = pageSize;
    serviceFilter.pageNumber = pageNumber;
    serviceFilter.orderBy = orderBy;
    serviceFilter.orderDirection = orderDirection;
    this.servicesProxy.getServices(serviceFilter).subscribe(response => {
      if (response.result === Result.Success) {
        this.totalRecords = response.totalRecords;
        this.globalServicesList = response.services;
        this.smartTable.setPage(pageNumber);
      } else {
        this.messages.showMessages("generalServices.edit.messageRegisterError", 'ERROR');
      }
    });
  }

  updateService(){
    if(this.editForm.valid){
        let globalServices = new UpdateServiceIn();
        globalServices.service = new Service();
        let horaInicial = '';
        let horaFinal = '';
        if (this.limitedHours) {
          horaInicial = this.timeInitial == null ? null: this.timeInitial.hour + ":" + this.timeInitial.minute;
          horaFinal = this.timeFinal == null ? null: this.timeFinal.hour + ":" + this.timeFinal.minute;
        } else {
          horaInicial = undefined;
          horaFinal = undefined;
        }
        if(!this.limitedDays){
          this.days = new Array<number>();
        }
        let days = this.days.join("-");
        globalServices.service.serID = this.serID;
        globalServices.service.ser_max_amount = this.editForm.controls.amounMin.value;
        globalServices.service.ser_status = this.editForm.controls.stateServices.value;
        globalServices.service.ser_days_operation = days;
        globalServices.service.ser_initial_schedule = horaInicial;
        globalServices.service.ser_final_schedule = horaFinal;
        this.servicesProxy.updateService(globalServices).subscribe(response => {
          if (response.result === Result.Success) {
            this.editModal.dismissModal();
            this.getServices();
            this.messages.showMessages("generalServices.edit.messageSuccess", 'SUCCESS');
          } else {
            this.messages.showMessages("generalServices.edit.messageError", 'ERROR');
          }
        });
      } else {
        this.hasError = true;
      }
    }

    
    
    

}
