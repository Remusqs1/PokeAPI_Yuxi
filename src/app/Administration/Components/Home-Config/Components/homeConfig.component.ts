import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Result } from '../../../../Commons/Classes/result';
import { MessagesComponent } from '../../../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../../../Shared/Components/SmartTable/ng2-smart-table.component';
import { GetHomeConfigIn } from '../MethodParameters/getHomeConfigIn';
import { HomeConfigService } from '../Services/homeConfig.service';
import { HomeConfigTableService } from '../Services/homeConfigTable.service';
import { SpinnerService } from '../../../../Shared/Services/spinner.service';
import { FormGroup } from '@angular/forms';
import { MENUOPTIONS } from '../../../../Shared/Components/Sidebar/menu-items';
import { GetUserByFilterIn } from '../../Profile/MethodParameters/getUserByFilterIn';
import { environment } from '../../../../../environments/environment';
import { UserService } from '../../User/Services/user.service';
import { UserByFilter } from '../../User/MethodParameters/userByfilter';
import { UserFormsService } from '../../User/Services/user.forms.service';
import { CreateHomeConfigIn } from '../MethodParameters/CreateHomeConfigIn';
import { BaseIn } from '../../../../Commons/Classes/baseIn';
import { GetHomeConfigByUserIdIn } from '../MethodParameters/getHomeConfigByUserIdIn';
import * as _ from 'lodash';

@Component({
    selector: 'app-homeConfig',
    templateUrl: './homeConfig.component.html',
    providers: [HomeConfigTableService, HomeConfigService, SpinnerService, UserService, UserFormsService]
})

export class HomeConfigComponent implements OnInit {
    @ViewChild('messages', { static: false }) messages: MessagesComponent;
    @ViewChild('createModal', { static: false }) Modal: ModalBasicComponent;
    @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
    @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;
    @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
    public settings: any;
    public totalRecords: number = 0;
    public input: GetHomeConfigIn;
    public listHomeConfig: any[];
    public listHomeConfigUser: Array<any> = [];
    public ModalAceptText: string;
    public ModalCloseText: string;
    public ModalTitle: string;
    public homeConfigForm: FormGroup;
    public listMenuOptions: any[];
    public orderMenu: any[] = [];
    public filterForm: FormGroup;
    public listUserByFilter: Array<UserByFilter>;
    public hasError = false;
    public img: string;
    public imgTosee: string;
    public idConfiguration: number;
    public addConfiguration: boolean;
    public deleteConfig: boolean;
    public stateConfig: boolean;
    
    constructor(
        private homeConfigTableService: HomeConfigTableService,
        private homeConfigService: HomeConfigService,
        private router: Router,
        private spinnerService: SpinnerService,
        private userService: UserService,
        private userFormService: UserFormsService,
    ) {
        this.input = new GetHomeConfigIn();
        this.ModalCloseText = 'Cerrar';
        for (let i = 1; i <= 6; i++) {
            this.orderMenu.push(i);
        }
        this.addConfiguration = false;
    }
    ngOnInit() {
        this.settings = this.homeConfigTableService.getConfigDataTable();
        this.homeConfigForm = this.homeConfigTableService.createHomeConfigForm();
        this.filterForm = this.userFormService.getFilterForm();
        this.listMenuOptions = MENUOPTIONS;
        this.getHomeConfig();
        this.getUserByFilter();
    }

    getHomeConfig() {
        this.homeConfigService.getHomeConfig('GetHomeConfig', this.input).subscribe(
            response => {
                switch (response.result) {
                    case (Result.Success):
                        this.listHomeConfig = response.listHoemConfig;
                        this.totalRecords = this.listHomeConfig.length;
                        break;
                    case (Result.NoRecords):
                        this.messages.showMessages('No hay registros para esta consulta', 'ERROR');
                        break;
                    case (Result.InvalidSession):
                        this.invalidSession();
                        break;
                    case (Result.Error):
                        console.log(response);
                        this.messages.showMessages('Error al consultar la configuracion', 'ERROR');
                }
            }
        );
    }
    filter(query: any) {
        console.log(query);
        _.find(this.listHomeConfig, (o) => {
            if (o.OptionMenu === query) {
                this.listHomeConfig = [];
                this.listHomeConfig.push(o);
            } else if (o.OrderOption === Number(query)) {
                this.listHomeConfig = [];
                this.listHomeConfig.push(o);
            } else if (o.UsuarioId === Number(query)) {
                this.listHomeConfig = [];
                this.listHomeConfig.push(o);
            } else if (query === '' || query === undefined) {
                this.getHomeConfig();
            }
        });
    }
    getHomeConfigByUserId() {
        const getHomeConfigUser = new GetHomeConfigByUserIdIn();
        getHomeConfigUser.UserId = JSON.parse(localStorage.getItem('user_info')).usrID;
        this.homeConfigService.getHomeConfig('GetHomeConfigByUserId', getHomeConfigUser).subscribe(
            response => {
                switch (response.result) {
                    case (Result.Success):
                        this.listHomeConfigUser = response.listHoemConfig;
                        if (this.listHomeConfigUser.length >= 6 && this.idConfiguration === undefined) {
                            this.Modal.closeModal();
                            this.messages.showMessages('El Usuario ya cuenta con todos los Accesos configurados', 'ERROR');
                        } else {
                            this.saveConfiguration();
                        }
                        console.log(this.listHomeConfigUser);
                        break;
                    case (Result.InvalidSession):
                        this.invalidSession();
                        break;
                    case (Result.Error):
                        console.log(response);
                }
            }
        );
    }

    getUserByFilter(pageNumber: number = 0, orderBy: string = 'usrID', orderDirection: string = 'DES') {
        const userFilter = new GetUserByFilterIn();
        userFilter.usr_userName = this.filterForm.get('usr_userName').value;
        userFilter.usr_numberDocument = this.filterForm.get('usr_numberDocument').value;
        userFilter.pageSize = environment.pageSize;
        userFilter.pageNumber = pageNumber;
        userFilter.orderBy = orderBy;
        userFilter.orderDirection = orderDirection;
        this.userService.getUserByFilter(userFilter).subscribe(response => {
            if (response.result === Result.Success) {
                this.listUserByFilter = response.listGetUserByFilter;
            }
            else if (response.result == Result.InvalidSession) {
                this.invalidSession();
            }
            else if (response.result == Result.InvalidPermissionRole) {
                this.messages.showMessages('invalidPermissionRole.messageError', 'ERROR');
            } else {
                this.messages.showMessages('user.getUser.messageError', 'ERROR');
            }
        });
    }
    handleFileInput(e) {
        const file = e.dataTrasfer ? e.dataTransfer.files[0] : e.target.files[0];
        const pattern = /image-*/;
        const raeder = new FileReader();
        raeder.onload = this._handledReaderLoaded.bind(this);
        raeder.readAsDataURL(file);
    }
    _handledReaderLoaded(e) {
        const reader = e.target;
        const img = btoa(reader.result);
        this.img = img;
        this.imgTosee = atob(this.img);
    }
    saveConfiguration() {
        this.spinnerService.show();
        const homeConfiguration = new CreateHomeConfigIn();
        if (this.idConfiguration === undefined) {
            homeConfiguration.OptionMenu = this.homeConfigForm.value.OptionMenu;
            homeConfiguration.Path = MENUOPTIONS.find(om => om.name === this.homeConfigForm.value.OptionMenu).path;
            homeConfiguration.OrderOption = Number(this.homeConfigForm.value.OrderOption);
            homeConfiguration.UserId = JSON.parse(localStorage.getItem('user_info')).usrID;
            homeConfiguration.Icon = this.img;
            homeConfiguration.StateConfig = true;
            this.homeConfigService.createUpdateHomeConfig('CreateHomeConfig', homeConfiguration).subscribe(
                response => {
                    switch (response.result) {
                        case (Result.Success):
                            this.spinnerService.hide();
                            this.messages.showMessages('Guardado Correctamente', 'SUCCESS');
                            this.closeModal();
                            this.Modal.closeModal();
                            this.img = undefined;
                            this.getHomeConfig();
                            break;
                        case (Result.NoRecords):
                            this.spinnerService.hide();
                            this.closeModal();
                            this.img = undefined;
                            this.Modal.closeModal();
                            this.messages.showMessages('Error al Guardar', 'ERROR');
                            break;
                        case (Result.InvalidSession):
                            this.spinnerService.hide();
                            this.invalidSession();
                            this.closeModal();
                            this.img = undefined;
                            this.Modal.closeModal();
                        case (Result.Error):
                            console.log(response);
                            this.spinnerService.hide();
                            this.closeModal();
                            this.img = undefined;
                            this.Modal.closeModal();
                            this.messages.showMessages('Error de servidor', 'ERROR');
                            break;
                    }
                }
            );
        } else {
            this.editConfiguration();
        }
    }
    ConfigurationSelected(e) {
        this.Modal.open();
        this.ModalAceptText = 'Editar';
        this.ModalTitle = 'Editar Configuración'
        this.idConfiguration = e.data.Id;
        this.img = e.data.Icon;
        this.stateConfig = e.data.StateConfig;
        this.homeConfigForm.patchValue({
            OptionMenu: e.data.OptionMenu,
            OrderOption: e.data.OrderOption,
            UserId: e.data.UserId
        });
        this.imgTosee = atob(e.data.Icon);
    }
    configurationToDelete(e) {
        this.Modal.open();
        this.ModalAceptText = 'Borrar';
        this.ModalTitle = 'Borrar Configuración'
        this.idConfiguration = e.data.Id;
        this.img = e.data.Icon;
        this.stateConfig = false;
        this.homeConfigForm.patchValue({
            OptionMenu: e.data.OptionMenu,
            OrderOption: e.data.OrderOption,
            UserId: e.data.UserId
        });
        this.deleteConfig = true;

    }
    editConfiguration() {
        const homeConfiguration = new CreateHomeConfigIn();
        homeConfiguration.OptionMenu = this.homeConfigForm.value.OptionMenu;
        homeConfiguration.Path = MENUOPTIONS.find(om => om.name === this.homeConfigForm.value.OptionMenu).path;
        homeConfiguration.OrderOption = Number(this.homeConfigForm.value.OrderOption);
        homeConfiguration.UserId = JSON.parse(localStorage.getItem('user_info')).usrID;
        homeConfiguration.Icon = this.img;
        homeConfiguration.StateConfig = this.stateConfig;
        homeConfiguration.Id = this.idConfiguration;
        this.homeConfigService.createUpdateHomeConfig('UpdateHomeConfig', homeConfiguration).subscribe(
            response => {
                switch (response.result) {
                    case (Result.Success):
                        this.spinnerService.hide();
                        this.messages.showMessages('Editado Correctamente', 'SUCCESS');
                        this.closeModal();
                        this.Modal.closeModal();
                        this.img = undefined;
                        this.getHomeConfig();
                        break;
                    case (Result.NoRecords):
                        this.spinnerService.hide();
                        this.closeModal();
                        this.img = undefined;
                        this.Modal.closeModal();
                        this.messages.showMessages('Error al Editar', 'ERROR');
                        break;
                    case (Result.InvalidSession):
                        this.spinnerService.hide();
                        this.invalidSession();
                        this.closeModal();
                        this.img = undefined;
                        this.Modal.closeModal();
                    case (Result.Error):
                        console.log(response);
                        this.spinnerService.hide();
                        this.closeModal();
                        this.img = undefined;
                        this.Modal.closeModal();
                        this.messages.showMessages('Error de servidor', 'ERROR');
                        break;
                }
            }
        );
    }
    openModal() {
        this.ModalTitle = 'Guardar Configuración';
        this.ModalAceptText = 'Guardar';
        this.Modal.open();
    }
    closeModal() {
        this.hasError = false;
        this.homeConfigForm.reset();
        this.imgTosee = undefined;
        this.deleteConfig = false;
    }
    invalidSession() {
        this.messages.showMessages(
            'Su sessión ha caducado, ingrese de nuevo al sistema',
            'ERROR'
        );
        localStorage.removeItem('sesId_adm');
        localStorage.removeItem('user_adm');
        localStorage.removeItem('profile');
        setTimeout(() => {
            this.router.navigate(['/']);
        }, 5000);
    }

}