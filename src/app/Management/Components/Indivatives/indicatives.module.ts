import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_ROUTES } from './indicatives.routing';
import { SharedModule } from '../../../Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { IndicativesComponent } from './Components/indicatives.component';
import { IndicativesFormsService } from './Services/indicatives.forms.service';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    HOME_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule
  ],
  declarations: [
    IndicativesComponent
  ],
  exports: [
    IndicativesComponent
  ],
  providers: [
    IndicativesFormsService,
    StatusPipe,
    TranslatePipe
  ]
})
export class IndicativeModule { }
