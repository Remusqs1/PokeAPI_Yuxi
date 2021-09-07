import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Result } from '../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { StatusPipe } from '../../../../Shared/Pipes/statusPipe';
import { LiquidacionFormService } from '../Services/Liquidacion.form.service';
import { LiquidacionService } from '../Services/Liquidacion.service';


@Component({
  selector: 'app-liquidacion',
  templateUrl: './liquidacion.component.html',
  styleUrls: ['./liquidacion.component.css']
})
export class LiquidacionComponent implements OnInit {
  @ViewChild('messages', { static: false }) messages: MessagesComponent;

  public searchCreditForm: FormGroup;
  public getFileForm: FormGroup;
  documentTypesGc: any;
  dateCreditConsume: any;
  productTypesGc: any;
  numberCreditConsume: any;
  productTypeGc: any;
  submittedSearch: boolean = false;
  accountExist: boolean = false;
  accountSelected: boolean = true;

  constructor(private formService: LiquidacionFormService,
    private service: LiquidacionService,
    private formBuilder: FormBuilder,
    private statusPipe: StatusPipe,
    private router: Router) { }

  ngOnInit() {
  }

}
