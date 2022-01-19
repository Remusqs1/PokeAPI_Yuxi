import { Component, Injectable, ViewChild, ViewEncapsulation, OnDestroy, Inject, } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { ValidateSesionService } from './validateSesion.service';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-validate-sesion',
  template:`
  <div *ngIf="isValidateVisible || (isLoading |async)">
      <div class="row">
        
      </div>
  </div>`,
  encapsulation: ViewEncapsulation.None
})
export class ValidateSesion implements OnDestroy{
  public isValidateVisible = true;
    isLoading: Subject<boolean> = this.validateSesionService.isLoading;
    constructor(
      private validateSesionService: ValidateSesionService,
      private router: Router,
      @Inject(DOCUMENT) private document: Document
    ) {
        localStorage.removeItem('sesId_adm');
        localStorage.removeItem('user_adm');
        localStorage.removeItem('profile');
        setTimeout(() => {
          this.router.navigate(['/']);
        }, 5000);
    }
      ngOnDestroy() {
        this.isValidateVisible = false;
      }
}
