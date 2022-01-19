import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HOME_ROUTES } from './home.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CommonsModule } from '../../../Commons/commons.module';
import { TranslatePipe } from '@ngx-translate/core';
import { HomeComponent } from './Components/Home/home.component';
import { PokeService } from './Services/pokeService.service';
import { SharedModule } from '../../../Shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    HOME_ROUTES,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    CommonsModule,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: [
    TranslatePipe,
    PokeService
  ]
})
export class HomeModule { }
