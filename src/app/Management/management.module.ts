import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { MANAGEMENT_ROUTES } from './management.routing';
import { TranslateModule } from '@ngx-translate/core';
import { CommonService } from '../Commons/Services/common.service';
import { CommonsModule } from '../Commons/commons.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule, ToastrService } from 'ngx-toastr';
@NgModule({
  imports: [
    SharedModule,
    MANAGEMENT_ROUTES,
    ToastrModule.forRoot({
      positionClass :'toast-bottom-right'
    }), // ToastrModule added
  ],
  exports: [
    CommonModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    CommonsModule,
  ],
  declarations: [ ],
  providers: [
    CommonService,
    {provide: ToastrService, useClass: ToastrService}
  ]
})
export class ManagementModule { }
