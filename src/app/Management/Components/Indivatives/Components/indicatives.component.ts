import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Catalogs } from '../../../../Commons/Entities/catalogs';
import { GetCatalogsIn } from '../../../../Commons/MethodParameters/getCatalogsIn';
import { CommonService } from '../../../../Commons/Services/common.service';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { SmartTableComponent } from '../../../../Shared/Components/SmartTable/ng2-smart-table.component';
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

  constructor(private indicativesFormsService: IndicativesFormsService, private commonService: CommonService) { }

  ngOnInit() {
    this.indicativeForm = this.indicativesFormsService.getIndicativesForm();
    this.getCatalogs('indicativeStatus').subscribe(response => { this.indicativeStatusList = response.catalog; });
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
