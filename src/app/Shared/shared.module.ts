import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './Components/spinner.component';
import { BreadcrumbComponent } from './Components/Breadcrumb/breadcrumb.component';
import { NavigationComponent } from './Components/HeaderNavigation/navigation.component';
import { SidebarComponent } from './Components/Sidebar/sidebar.component';
import { FullComponent } from './Components/Layouts/Full/full.component';
import { BlankComponent } from './Components/Layouts/Blank/blank.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MessagesComponent } from './Components/Messages/messages.component';
import { ModalBasicComponent } from './Components/Modal/modal.component';
import { CellModule } from './Components/SmartTable/components/cell/cell.module';
import { FilterModule } from './Components/SmartTable/components/filter/filter.module';
import { TBodyModule } from './Components/SmartTable/components/tbody/tbody.module';
import { PagerModule } from './Components/SmartTable/components/pager/pager.module';
import { THeadModule } from './Components/SmartTable/components/thead/thead.module';
import { SmartTableComponent } from './Components/SmartTable/ng2-smart-table.component';
import { TrueFalseValueDirective } from './Directives/true-false-value-checkbox.directives';
import { CurrencyMaskDirective } from './Directives/currency-mask.directive';
import { DateFormatPipe } from './Pipes/dateFormatPipe';
import { StatusPipe } from './Pipes/statusPipe';
import { CurrencyFormatPipe } from './Pipes/currencyFormatPipe';
import { SpecialCharsPipe } from './Pipes/SpecialCharsPipe';
import { AuthenticationService } from '../Administration/Components/Authentication/Services/authentication.service';
import { GenerateDocumentsComponent } from '../Shared/Components/GenerateDocuments/generateDocuments.component';
import { GenerateDocumentService } from './Components/GenerateDocuments/services/generateDocument.service';
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
    CellModule,
    FilterModule,
    PagerModule,
    TBodyModule,
    THeadModule,
    NgImageSliderModule,
    NgxExtendedPdfViewerModule
  ],
  declarations: [
    SpinnerComponent,
    BreadcrumbComponent,
    NavigationComponent,
    SidebarComponent,
    FullComponent,
    BlankComponent,
    MessagesComponent,
    ModalBasicComponent,
    SmartTableComponent,
    TrueFalseValueDirective,
    CurrencyMaskDirective,
    DateFormatPipe,
    StatusPipe,
    CurrencyFormatPipe,
    SpecialCharsPipe,
    GenerateDocumentsComponent,
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
    BreadcrumbComponent,
    NavigationComponent,
    SidebarComponent,
    FullComponent,
    BlankComponent,
    RouterModule,
    PerfectScrollbarModule,
    MessagesComponent,
    ModalBasicComponent,
    SmartTableComponent,
    TrueFalseValueDirective,
    CurrencyMaskDirective,
    DateFormatPipe,
    StatusPipe,
    CurrencyFormatPipe,
    SpecialCharsPipe,
    TBodyModule,
    GenerateDocumentsComponent,
    
  ],
  providers: [
    TranslateService,
    AuthenticationService,
    GenerateDocumentService
  ]
})
export class SharedModule { }
