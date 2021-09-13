import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Result } from '../../../../Commons/Classes/result';
import { Catalogs } from '../../../../Commons/Entities/catalogs';
import { GetCatalogsIn } from '../../../../Commons/MethodParameters/getCatalogsIn';
import { CommonService } from '../../../../Commons/Services/common.service';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { CreateIndicativesIn } from '../../../MethodParameters/createIndicativesIn';
import { Indicative } from '../../../MethodParameters/indicative';
import { ManagementService } from '../../../Services/management.service';
import { IndicativesFormsService } from '../Services/indicatives.forms.service';

@Component({
  selector: 'app-indicatives',
  templateUrl: './indicatives.component.html'
})
export class IndicativesComponent implements OnInit {
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  indicativeForm: FormGroup;
  indicativeStatusList: Array<Catalogs>;
  settings: any;
  totalRecords: number;
  source: any;
  hasError = false;

  constructor(private indicativesFormsService: IndicativesFormsService, private commonService: CommonService,
    private managementService: ManagementService) { }

  ngOnInit() {
    this.indicativeForm = this.indicativesFormsService.getIndicativesForm();
    this.settings = this.indicativesFormsService.getIndicativesConfigDataTable();
    this.getCatalogs('indicativeStatus').subscribe(response => {
      this.indicativeStatusList = response.catalogs;
    });
  }

  search() {
    console.log("Search");
  }

  getCatalogs(type) {
    const catalogsIn = new GetCatalogsIn();
    catalogsIn.cat_type = type;
    return this.commonService.getCatalogs(catalogsIn);
  }

  createIndicative() {
    this.hasError = false;
    if (this.indicativeForm.valid) {
      let createIndicative = new CreateIndicativesIn();
      createIndicative.indicative = new Indicative();

      createIndicative.indicative.project_name = this.indicativeForm.get('projectName').value;
      createIndicative.indicative.cell_name = this.indicativeForm.get('developCell').value;
      createIndicative.indicative.status = this.indicativeForm.get('status').value;
      createIndicative.indicative.requirement_quality = +this.indicativeForm.get('requirementQuality').value;
      createIndicative.indicative.software_quality = +this.indicativeForm.get('softwareQuality').value;
      createIndicative.indicative.bug_channels = +this.indicativeForm.get('bugChannels').value;
      createIndicative.indicative.bug_integrations = +this.indicativeForm.get('bugIntegrations').value;
      createIndicative.indicative.bug_busSupport = +this.indicativeForm.get('bugBusSupport').value;
      createIndicative.indicative.bug_core = +this.indicativeForm.get('bugCore').value;
      createIndicative.indicative.bug_data = +this.indicativeForm.get('bugData').value;
      createIndicative.indicative.bug = +this.indicativeForm.get('bugs').value;
      createIndicative.indicative.vulnerability = +this.indicativeForm.get('vulnerability').value;
      createIndicative.indicative.duplicated = +this.indicativeForm.get('duplicated').value;
      createIndicative.indicative.automatic_cover = +this.indicativeForm.get('automaticCover').value;
      createIndicative.indicative.report_quality = +this.indicativeForm.get('reportQuality').value;
      createIndicative.indicative.bug_environment = +this.indicativeForm.get('bugEnvironment').value;
      createIndicative.indicative.ans = +this.indicativeForm.get('ans').value;
      createIndicative.indicative.accomplish_develop = +this.indicativeForm.get('accomplishDevelop').value;
      createIndicative.indicative.internal_ans = +this.indicativeForm.get('internalAns').value;
      createIndicative.indicative.accomplishQA = +this.indicativeForm.get('accomplishQA').value;
      // createIndicative.indicative.star_date = this.indicativeForm.get('startDate').value;
      // createIndicative.indicative.end_date = this.indicativeForm.get('endDate').value;

      let startDate;
      let endDate;

      if (this.indicativeForm.get('startDate').value !== undefined && this.indicativeForm.get('startDate').value !== "undefined" && this.indicativeForm.get('startDate').value !== NaN) {
        startDate = new Date(this.indicativeForm.get('startDate').value.year, this.indicativeForm.get('startDate').value.month - 1, this.indicativeForm.get('startDate').value.day, 0, 0, 0)
      }
      else {
        startDate = new Date("01/01/1900")
      }

      if (this.indicativeForm.get('endDate').value !== undefined && this.indicativeForm.get('endDate').value !== "undefined" && this.indicativeForm.get('endDate').value !== NaN) {
        endDate = new Date(this.indicativeForm.get('endDate').value.year, this.indicativeForm.get('endDate').value.month, this.indicativeForm.get('endDate').value.day, 23, 59, 59)
      }
      else {
        endDate = new Date();
        endDate = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate(), 23, 23, 59); //Get current full date
      }

      createIndicative.indicative.star_date = startDate;
      createIndicative.indicative.end_date = endDate;

      this.managementService.createIndicative(createIndicative).subscribe(response => {
        if (response.result === Result.Success) {
          this.messages.showMessages("Indicativo creado exitosamente", "Success", true);
        }
        else {
          this.messages.showMessages("Error al crear indicativo", "Error");
        }
      });
    }
    else {
      this.hasError = true;
    }
  }

}
