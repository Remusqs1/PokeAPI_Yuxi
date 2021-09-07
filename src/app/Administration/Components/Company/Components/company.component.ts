import { OnInit, ViewChild, Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { TranslateService } from '@ngx-translate/core';
import { CompanyFormsService } from '../Services/company.forms.service';
import { CompanyService } from '../Services/company.service';
import { DocumentType } from '../../../../Commons/Entities/documentType';
import { GetDocumentTypesIn } from '../../../../Commons/MethodParameters/getDocumentTypesIn';
import { Result } from '../../../../Commons/Classes/result';
import { CommonService } from '../../../../Commons/Services/common.service';
import { environment } from '../../../../../environments/environment';
import { GetCompanyFiltersIn } from '../MethodParameters/getCompanyFiltersIn';
import { Company } from '../../../../Commons/Entities/company';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css'],
})
export class CompanyComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;

  companysList: Array<Company>;
  documentTypesList: Array<DocumentType>;
  filterForm: FormGroup;
  labelNoRecords: string;
  totalRecords = 0;
  events: any = {
    eventAlertModal: {},
    eventGrid: {}
  };

  settings: any;
  hasError = false;

  constructor(private companyFormsService: CompanyFormsService,
    private companyService: CompanyService,
    private commonService: CommonService) { }

  ngOnInit() {
    this.filterForm = this.companyFormsService.getFilterForm();
    this.settings = this.companyFormsService.getConfigDataTable();
    this.getCompanys();
    this.getDocumentTypes();
  }

  changePage($event: any) {
    this.getCompanys($event.$event.page, this.smartTable.sortColumnId, this.smartTable.sortDirection);
  }

  sortDataTable($event: any) {
    const splitted = $event.column.split('.').pop();
    this.getCompanys(this.smartTable.pager.getPage(), splitted, $event.currentDirection);
  }

  getCompanys(pageNumber: number = 1, orderBy: string = '', orderDirection: string = '') {
    const companyFilter = new GetCompanyFiltersIn();
    companyFilter.name = this.filterForm.get('filterName').value;
    companyFilter.typeDocument = this.filterForm.value.filteruserDocumentType;
    companyFilter.documentNumber = this.filterForm.get('filterDocumentNumber').value;
    companyFilter.state = this.filterForm.get('filterState').value;
    companyFilter.pageSize = environment.pageSize;
    companyFilter.pageNumber = pageNumber;
    companyFilter.orderBy = orderBy;
    companyFilter.orderDirection = orderDirection;
    this.companyService.getCompanyFilters(companyFilter).subscribe(response => {
      if (response.result === Result.Success) {
        this.totalRecords = response.totalRecords;
        this.companysList = response.companys;
        this.smartTable.setPage(pageNumber);
      } else {
        this.messages.showMessages('company.getCompany.messageError', 'ERROR');
      }
    });
  }

  getDocumentTypes() {
    this.commonService.getDocumentTypes(new GetDocumentTypesIn())
      .subscribe(response => {
        if (response.result === Result.Success) {
          this.documentTypesList = response.documentTypes;
        } else {
          this.messages.showMessages('administration.authentication.login.documentTypes.error.messageError', 'ERROR');
        }
      });
  }

}
