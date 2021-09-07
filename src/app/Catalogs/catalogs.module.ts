import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { CATALOGS_ROUTES } from './catalogs.routing';

@NgModule({
  imports: [
    SharedModule,
    CATALOGS_ROUTES
  ],
  exports: [
    CommonModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  declarations: []
})
export class CatalogsModule { }