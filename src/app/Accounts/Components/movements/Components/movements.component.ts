import { Component, OnInit, ViewChild } from '@angular/core';
import { GenerateDocumentsComponent } from '../../../../Shared/Components/GenerateDocuments/generateDocuments.component';

@Component({
  selector: 'app-movements',
  templateUrl: './movements.component.html',
  styleUrls: ['./movements.component.css']
})
export class MovementsComponent implements OnInit {
  @ViewChild('generate', { static: false }) generate: GenerateDocumentsComponent;
  constructor() { }

  ngOnInit() {
  }
  consultarCliente() {
    this.generate.consultarCliente();
  }
}
