import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonsModule } from '../../../Commons/commons.module';
import { PokeService } from '../Home/Services/pokeService.service';
import { DetailsComponent } from './Components/details.component';
import { DETAILS_ROUTES } from './details.routing';


@NgModule({
  imports: [
    CommonModule,
    DETAILS_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    CommonsModule
  ],
  declarations: [
    DetailsComponent
  ],
  exports: [
    DetailsComponent
  ],
  providers: [
    PokeService,
  ]
})
export class DetailsModule { }
