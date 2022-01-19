import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './Components/spinner.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DateFormatPipe } from './Pipes/dateFormatPipe';
import { StatusPipe } from './Pipes/statusPipe';
import { CurrencyFormatPipe } from './Pipes/currencyFormatPipe';
import { SpecialCharsPipe } from './Pipes/SpecialCharsPipe';
import { ValidateSesion } from './Services/validateSesion.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule,
    PerfectScrollbarModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    SpinnerComponent,
    DateFormatPipe,
    StatusPipe,
    CurrencyFormatPipe,
    SpecialCharsPipe,
    ValidateSesion,
   
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    TranslateModule,
    SpinnerComponent,
    RouterModule,
    PerfectScrollbarModule,
    DateFormatPipe,
    StatusPipe,
    CurrencyFormatPipe,
    SpecialCharsPipe,    
  ],
  providers: [
    TranslateService,
  ]
})
export class SharedModule { }
