import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../Shared/shared.module';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { CASES_ROUTES } from './cases.routing';
import { CasesService } from './Services/cases.service';

import { CasesFormService } from './Services/cases.form.service';
import { StatusPipe } from '../Shared/Pipes/statusPipe';
import { ListCasesModule } from './Components/Adviser/Components/listCases.module';





@NgModule({
    imports: [
        SharedModule,
        CASES_ROUTES
    ],
    exports: [
        CommonModule,
        FormsModule,
        TranslateModule,
        ReactiveFormsModule
    ],
    declarations: [
        
    ],
    providers: [
        CasesService,
        CasesFormService,
        StatusPipe,
        TranslatePipe

    ],
})
export class CasesModule { }
