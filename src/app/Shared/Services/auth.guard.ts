import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private routes: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('user_adm') != null && localStorage.getItem('sesId_adm') != null) {
      if (JSON.parse(localStorage.getItem('user_adm')).FirstLogin) {
        localStorage.setItem('IslogToChangePassword', "True");
        this.routes.navigate(['ChangePassword', 'logged']);
      }
      else {
        return true;
      }
    }
    else {
      this.routes.navigate(['']);
      return false;
    }
  }
}
