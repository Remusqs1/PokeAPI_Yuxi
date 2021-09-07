import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { DOCUMENTMANAGER_ROUTES } from './documentmanager.routing';
import { DocumentManagerService } from './Services/documentmanager.service';



@NgModule({
  imports: [
    SharedModule,
    DOCUMENTMANAGER_ROUTES,
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DocumentManagerService
  ],
  declarations: []
})
export class DocumentManagerModule { }