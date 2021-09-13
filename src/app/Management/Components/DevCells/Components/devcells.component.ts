import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Result } from '../../../../Commons/Classes/result';
import { Catalogs } from '../../../../Commons/Entities/catalogs';
import { GetCatalogsIn } from '../../../../Commons/MethodParameters/getCatalogsIn';
import { CommonService } from '../../../../Commons/Services/common.service';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { DevCellFormsService } from '../Services/devcells.forms.service';

@Component({
  selector: 'app-devcells',
  templateUrl: './devcells.component.html'
})
export class DevCellsComponent implements OnInit {
  @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  filterForm: FormGroup;
  hasError = false;
  devCellList: Array<Catalogs>;
  settings: any;
  totalRecords: number;
  source: any;
  constructor(private commonService: CommonService, private devCellFormsService : DevCellFormsService) { }

  ngOnInit() {
    this.filterForm = this.devCellFormsService.getDevCellsForm();
    this.getCatalogs('devCell').subscribe(response => {
      this.devCellList = response.catalogs;
    });
    this.settings = this.devCellFormsService.getDevCellsConfigDataTable();
  }

  search() {
    console.log("Search");
  }

  getCatalogs(type) {
    const catalogsIn = new GetCatalogsIn();
    catalogsIn.cat_type = type;
    return this.commonService.getCatalogs(catalogsIn);
  }

}
