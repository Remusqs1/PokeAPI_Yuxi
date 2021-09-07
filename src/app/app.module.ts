import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule,
  LocationStrategy,
  HashLocationStrategy,
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Translation
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './Shared/Services/auth.guard';
import { SharedModule } from './Shared/shared.module';
import { SpinnerServiceInterceptor } from './Commons/Services/spinnerService.interceptor';
import { AngularImageViewerModule } from "angular-x-image-viewer";
import { NgImageSliderModule } from 'ng-image-slider';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';




const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    SharedModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    AngularImageViewerModule,
    NgImageSliderModule,
    NgxExtendedPdfViewerModule,
    NgMultiSelectDropDownModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerServiceInterceptor,
      multi: true,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
