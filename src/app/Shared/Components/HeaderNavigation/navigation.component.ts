import { Component, AfterViewInit, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { User } from '../../../Commons/Entities/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit, AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();
  public avatar: string;
  public config: PerfectScrollbarConfigInterface = {};
  user: User;
  constructor(private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user_adm'));
    if (this.user != null) {
      this.avatar = atob(this.user.usr_avatar);
    }
    else{ //TODO Borrar
      this.user = new User();
      this.user.usr_fullName = 'Pepito Perez'
      this.user.usr_email = 'user@email.com'
    }
  }

  ngAfterViewInit() {
  }


  closeSesion() {
    // localStorage.clear();

    // let getCloseSessionIn = new CloseSessionMoIn();
    // localStorage.removeItem('username');

    // this.auth.closeSession(getCloseSessionIn)
    //   .subscribe(response => {
    //     if (response.result == Result.Success) {
    //       localStorage.removeItem('sesId_adm');
    //       localStorage.removeItem('user_adm');
    //       localStorage.removeItem('profile');
    //       this.router.navigate(['/']);
    //     }
    //   });
  }

  changePassword() {
    localStorage.setItem('IslogToChangePassword', "True");
    this.router.navigate(['ChangePassword', 'logged']);
  }
}
