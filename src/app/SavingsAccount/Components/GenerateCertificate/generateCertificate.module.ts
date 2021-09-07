import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GENERATECERTIFICATE_ROUTES } from './GenerateCertificate.routing';
import { GenerateCertificateComponent } from './Components/generate-certificate/generate-certificate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../../Shared/shared.module';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { GenerateCertificateService } from './Services/generateCertificate.service';
import { StatusPipe } from '../../../Shared/Pipes/statusPipe';
import { TranslatePipe } from '@ngx-translate/core';
import { GenerateCertificateFormService } from './Services/generate-certificate.form.service';



@NgModule({
  declarations: [
    GenerateCertificateComponent
  ],
  imports: [
    CommonModule,
    GENERATECERTIFICATE_ROUTES,
    ReactiveFormsModule,
    SharedModule
  ], exports: [
    GenerateCertificateComponent
  ],
  providers: [
    ProfileService,
    GenerateCertificateService,
    GenerateCertificateFormService,
    StatusPipe,
    TranslatePipe
  ]
})
export class GenerateCertificateModule { }
