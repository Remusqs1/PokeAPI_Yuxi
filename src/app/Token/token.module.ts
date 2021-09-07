import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../Shared/shared.module';
import { TokenComponent } from './Components/token.component';
import { TOKEN_ROUTES } from './token.routing';
import { TokenService } from './Service/token.service';



@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    NgbModule,
    SharedModule,         
    TOKEN_ROUTES
  ],
  declarations: [
    TokenComponent
  ],
  exports: [
    TokenComponent
  ],
  providers: [
    TokenService
  ]
})

export class TokenModule { }