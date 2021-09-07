import { Component, AfterViewInit, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { ProfileService } from '../../../Administration/Components/Profile/Services/profile.service';
import { Profile } from '../../../Commons/Entities/profile';
import { GetProfileActionsIn } from '../../../Administration/Components/Profile/MethodParameters/getProfileActionsIn';
import { ActionByProfile } from '../../../Commons/Entities/actionByProfile';
import { User } from '../../../Commons/Entities/user';
import { PermissionService } from '../../../Administration/Components/Permission/Services/permission.service';
import { GetPermissionByRoleIn } from '../../../Administration/Components/Permission/MethodParameters/getPermissionByRoleIn';
import { PermissionRole } from '../../../Administration/Components/Permission/MethodParameters/permissionRole';
import { PermissionByRole } from '../../../Administration/Components/Permission/MethodParameters/permissionByRole';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: RouteInfo[] = [];
  public sidebarnavItem: RouteInfo[];
  actionss: PermissionByRole[] = [];
  // this is for the open close
  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(
    private modalService: NgbModal,
    private router: Router,
    private profileProxy: ProfileService,
    private permissionProxy: PermissionService,
    private route: ActivatedRoute
  ) { }
  // End open close

  validateItemMenu(items: RouteInfo, action: PermissionByRole[]) {


    if (items.submenu.length === 0) {
      let itemsMenu = action.filter(subAction => items.actions.includes(+subAction.pm_code));
      if (itemsMenu.length === 0) {
        return null;
      } else {
        return items;
      }
    } else {
      let tempItem: Array<any> = new Array<any>();
      let finaleMenu: Array<any> = new Array<any>();

      if (items.submenu['label'] == undefined) {
        for (const iterator of items.submenu) {
          tempItem.push(this.validateItemMenu(iterator, action));
          tempItem = tempItem.filter(i => i !== null && Object.keys(i).length !== 0);
          if (tempItem.length > 0) {
            if (iterator.submenu.length > 0) {
              iterator.submenu = tempItem[0];
            }
            finaleMenu.push(iterator);
          }
          tempItem = new Array<any>();
        }
      }
      return finaleMenu;
    }
  }

  validateMenu(items: RouteInfo[], validActions: PermissionByRole[]) {
    let tempItem: any;
    let finaleMenu: Array<RouteInfo> = new Array<RouteInfo>();
    for (const iterator of items) {
      tempItem = this.validateItemMenu(iterator, validActions);
      //tempItem = tempItem.filter(i => i != null && Object.keys(i).length !== 0);
      // if(tempItem.length > 0) {
      iterator.submenu = tempItem;
      finaleMenu.push(iterator);
      // }          
    }
    return finaleMenu;

  }
  loadNavBar(actions) {


    if (actions == null) {

      setTimeout(() => {
        this.LoadPermissions()
      }, 100);

    } else {
      ROUTES.filter((sidebarnavItem, ind) => {
        actions.forEach(m => {
          if (sidebarnavItem.actions[0].toString() == m.pm_code) {
            this.sidebarnavItems.push(sidebarnavItem);
          }
        })
      });
      this.sidebarnavItem = this.validateMenu(ROUTES.filter(sidebarnavItem => sidebarnavItem.submenu.length > 0), actions);
    }

  }


  LoadPermissions() {
    let t: GetPermissionByRoleIn = new GetPermissionByRoleIn();
    let tt: User = JSON.parse(localStorage.getItem('user_adm'));
    try {
      t.role = tt.usr_role;
      this.permissionProxy.getPermissionByRole(t).subscribe((response) => {

        this.actionss = response.listPermissions;
        this.loadNavBar(this.actionss);
      })
    } catch {

    }

  }
  // End open close
  ngOnInit() {

    this.LoadPermissions();
    // let profile: User = Object.assign(new User(), JSON.parse(localStorage.getItem("user_info")));
    // let permissions: PermissionRole = new PermissionRole();
    // permissions.usr_role = profile.usr_role;
    // let getProfileActionsIn: GetPermissionByRoleIn = new GetPermissionByRoleIn();
    // getProfileActionsIn.role = profile.usr_role;

    // this.loadNavBar();


  }

  // translate(value: string): string {
  //     debugger
  //     var translate = this.translateService.execute(value);
  //     return this.translateService.execute(value);
  // }
}
