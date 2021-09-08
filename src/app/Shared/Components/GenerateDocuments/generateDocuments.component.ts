import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { GenerateDocumentService } from './services/generateDocument.service';


@Component({
  selector: 'app-generate-documents',
  templateUrl: './generateDocuments.component.html',
  providers: [GenerateDocumentService]
})
export class GenerateDocumentsComponent implements OnInit {

  constructor() { }
  ngOnInit() {

  }

}
