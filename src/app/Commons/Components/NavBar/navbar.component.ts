import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../Services/common.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavBarComponent implements OnInit {
    
    searchForm: FormGroup;
    hasError = false;

  constructor(private routes: Router, private commonService : CommonService) { }

  ngOnInit() {
    this.searchForm = this.commonService.getSearchForm();
  }


  goLogin() {
    this.routes.navigate(['']);
  }

  goHome() {
    this.routes.navigate(['Home']);
  }

  onSearch(){
      let searchValue = this.searchForm.get('searchPokemon').value;
      if(this.searchForm.get('searchPokemon').value !== undefined && this.searchForm.get('searchPokemon').value !== null && this.searchForm.get('searchPokemon').value !== "" ){
        this.routes.navigate(['Details'], { queryParams: { searchValue } });
      }
      else{
        this.routes.navigate(['Home']);
      }
  }

}