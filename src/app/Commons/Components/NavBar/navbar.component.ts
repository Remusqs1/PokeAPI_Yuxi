import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../Entities/user';
import { CommonService } from '../../Services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavBarComponent implements OnInit {

  searchForm: FormGroup;
  hasError = false;
  user: User;
  constructor(private routes: Router, private commonService: CommonService) { }

  ngOnInit() {
    let userData = localStorage.getItem("user");
    if (userData === undefined || userData === null || userData === "") {
      this.goLogin();
    }
    else {
      this.user = JSON.parse(userData);
      console.log(this.user);

    }
    this.searchForm = this.commonService.getSearchForm();
  }

  ngAfterViewInit(): void {
    if(this.user.usr_userName === null || this.user.usr_userName === undefined || this.user.usr_userName === ""){
      this.user.usr_userName = this.user.usr_email;
    }
  }

  goLogin() {
    localStorage.clear();
    this.routes.navigate(['']);
  }

  goHome() {
    this.routes.navigate(['Home']);
  }

  onSearch() {
    let searchValue : string = this.searchForm.get('searchPokemon').value.toLowerCase();;
    if (this.searchForm.get('searchPokemon').value !== undefined && this.searchForm.get('searchPokemon').value !== null && this.searchForm.get('searchPokemon').value !== "") {
      this.routes.navigate(['Details'], { queryParams: { searchValue } });
    }
    else {
      this.routes.navigate(['Home']);
    }
  }

}