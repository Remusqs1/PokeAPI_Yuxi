import { Component, OnInit, ViewChild } from '@angular/core';
import { AuditFormService } from '../../Services/audit.form.service';
import { FormGroup } from '@angular/forms';
import { SmartTableComponent } from '../../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { MessagesComponent } from '../../../../../Shared/Components/Messages/messages.component';
import { Result } from '../../../../../Commons/Classes/result';
import { AuditService } from '../../Services/audit.service';
import { LogAudit, LogAuditByDateOut } from '../../MethoParameters/getLogAuditByDateOut';
import { LogAuditByDateIn } from '../../MethoParameters/getLogAuditByDateIn';
import { Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-audit',
  templateUrl: './audit.component.html',
  styleUrls: ['./audit.component.css']
})
export class AuditComponent implements OnInit {
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  public totalRecords: number;
  public settings: any;
  public hasError = false;
  public filterForm: FormGroup;
  public totalRecord = 0
  public listLoagAudit: Array<LogAudit>;
  public listHeaders: {};
  constructor(private formService: AuditFormService, private auditService: AuditService, private router: Router
  ) {
    this.totalRecords = 0;
    this.listHeaders = { audID: 'ID', aut_user: 'usuario', aud_transaction: 'Transaccion', aud_table: 'Tabla', aut_status: 'Estado', aut_ip: 'IP', aut_date: 'Fecha' };
  }

  ngOnInit() {
    this.createForm();
    this.settings = this.formService.getConfigDataTable();
  }
  createForm() {
    this.filterForm = this.formService.getFilterForm();
  }
  getLogAuditByDate() {
    const request = new LogAuditByDateIn();
    const currentDate = new Date();
    request.startDate = this.filterForm.value.startDate;
    request.endDate = this.filterForm.value.endDate;
    if (request.startDate > request.endDate) {
      this.messages.showMessages('La fecha inicial no debe ser mayor que la fecha final', 'ERROR');
    }else if(new Date(request.startDate) > currentDate) {
      this.messages.showMessages('La fecha inicial no debe ser mayor a la fecha actual', 'ERROR');
    } else {
      this.auditService.getLogAuditByDate(request).subscribe(
        response => {
          switch (response.result) {
            case (Result.Success):
              this.listLoagAudit = response.listLogAudit;
              this.totalRecords = this.listLoagAudit.length;
              this.filterForm.reset();
              break;
            case (Result.InvalidSession):
              this.invalidSession();
              this.filterForm.reset();
              break;
            case (Result.NoRecords):
              this.filterForm.reset();
              this.messages.showMessages('No se encontraron registros para este rango de fechas', 'ERROR');
              break;
            case (Result.Error):
              this.filterForm.reset();
              this.messages.showMessages('Error al realizar la consulta', 'ERROR');
          }
        }
      );
    }

  }
  downloadFile() {
    const listLoagAuditAux: data[] = [];
    let dataAux: data = { ID: null, Usuario: '', Transaccion: '', Tabla: '', Estado: '', IP: '', Fecha: '' };
    this.listLoagAudit.forEach(dt => {
      dataAux.ID = dt.audID;
      dataAux.Usuario = dt.aut_user;
      dataAux.Transaccion = dt.aud_transaction;
      dataAux.Tabla = dt.aud_table;
      dataAux.Estado = dt.aut_status;
      dataAux.IP = dt.aut_ip;
      dataAux.Fecha = moment(dt.aut_date, 'YYYYMD');
      listLoagAuditAux.push(dataAux);
      dataAux = { ID: null, Usuario: '', Transaccion: '', Tabla: '', Estado: '', IP: '', Fecha: '' };
    });
    this.auditService.exportCSVFile(this.listHeaders, listLoagAuditAux, 'Auditoria');
  }
  cleanLogAudit() {
    this.listLoagAudit = null;
    this.filterForm.reset();
    this.totalRecords = 0;
  }
  invalidSession() {
    this.messages.showMessages('Su sessión ha caducado, ingrese de nuevo al sistema', 'ERROR');
    localStorage.removeItem('sesId_adm');
    localStorage.removeItem('user_adm');
    localStorage.removeItem('profile');
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 5000);
  }
}
interface data {
  ID: number;
  Usuario: string;
  Transaccion: string;
  Tabla: string;
  Estado: string;
  IP: string;
  Fecha: any;
}
