import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { Result } from '../../Commons/Classes/result';
import { GetCatalogsIn } from '../../Commons/MethodParameters/getCatalogsIn';
import { MessagesComponent } from '../../Shared/Components/Messages/messages.component';
import { ModalBasicComponent } from '../../Shared/Components/Modal/modal.component';
import { SmartTableComponent } from '../../Shared/Components/SmartTable/ng2-smart-table.component';
import { CrudCatalogsIn } from '../MethoParameters/crudcatalogsIn';
import { Catalogs, CatalogsESP } from '../MethoParameters/getCatalogsOut';
import { GetTableFields } from '../MethoParameters/getTableNameIn';
import { ROUTES_CATALOGS } from '../MethoParameters/routes';
import { CatalogsService } from '../services/catalogs.service';
import { CatalogsFormService } from '../services/catalogsform.service';
import { TranslateService } from '@ngx-translate/core';
import { CatalogsForm } from '../MethoParameters/catalogsForm';
import { TexBoxCatalogs } from '../MethoParameters/controls';
import { DropdowCcatalogs } from '../MethoParameters/controls';
import { Checkboxcatalogs } from '../MethoParameters/controls';
import { ColumnTable } from '../MethoParameters/columnsTable';
import { GetCatalogsOut } from '../../Commons/MethodParameters/getCatalogsOut';


@Component({
    selector: 'app-catalogs',
    templateUrl: './catalogs.component.html',
    providers: [CatalogsService, CatalogsFormService, TranslateService]
})

export class CatalogsComponent implements OnInit {
    @ViewChild('smartTable', { static: false }) smartTable: SmartTableComponent;
    @ViewChild('messages', { static: false }) messages: MessagesComponent;
    @ViewChild('createModal', { static: false }) Modal: ModalBasicComponent;
    @ViewChild('deleteModal', { static: false }) alertModal: ModalBasicComponent;
    @ViewChild('editModal', { static: false }) editModal: ModalBasicComponent;

    public settings: any;
    public listcatalogs: Array<Catalogs>;
    public listcatalogsESP: Array<CatalogsESP>;
    public totalRecords: number;
    public totalRecordsESP: number;
    public pathComponent: string;
    public catalogsForm: FormGroup;
    public tableName: string;
    public ModalAceptText: string;
    public ModalCloseText: string;
    public ModalTitle: string;
    public hasError = false;
    public catalogsId: number;
    public listTablesName: any[];
    public listTableFields: ColumnTable[];
    public labelSearch: string;
    public allcatalogs: boolean;
    public listDepartment: any[] = [];
    public controls: CatalogsForm<string>[] = [];
    public dinamyForm: boolean;
    public listOptions: any[] = [];
    public newCatalogs: boolean;
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private catalogsService: CatalogsService,
        private catalogsFormService: CatalogsFormService,
        private translateService: TranslateService
    ) {
        this.pathComponent = '';
        this.totalRecords = 0;
        this.totalRecordsESP = 0;
        this.tableName = 'tb';
        this.ModalCloseText = 'Cerrar';
        this.labelSearch = '';
        this.dinamyForm = false;
        this.newCatalogs = false;
    }
    ngOnInit() {
        this.listTablesName = ROUTES_CATALOGS;
        /*this.catalogsForm.patchValue({
            DepartamentId: 'N',
            CountryId: 'N'
        });*/
    }
    changeTableName() {
        if (this.tableName === 'tb') {
            this.listcatalogs = [];
            this.totalRecords = 0;
            this.totalRecordsESP = 0;
        } else {
            this.totalRecords = 0;
            this.totalRecordsESP = 0;
            this.getCatalogs();
            this.getTableFields();
            this.settings = this.getSettings();
        }
    }
    cleanTable() {
        this.tableName = 'tb';
        if (this.tableName === 'tb') {
            this.listcatalogs = [];
            this.totalRecords = 0;
            this.newCatalogs = false;
            this.totalRecordsESP = 0;
            this.listcatalogsESP = [];
        }
    }
    getCatalogs() {
        this.listcatalogs = [];
        this.listcatalogsESP = [];
        const request = new CrudCatalogsIn();
        let controller = '';
        request.tableName = this.tableName;
        if (this.tableName === 'TBL_ESP') {
            controller = 'GetCatalogsESP';
            this.catalogsService.getCatalogs(controller, request).subscribe(
                response => {
                    switch (response.result) {
                        case (Result.Success):
                            this.listcatalogsESP = response.listESP;
                            this.totalRecordsESP = this.listcatalogsESP.length;
                            this.newCatalogs = true;
                            break;
                        case (Result.InvalidSession):
                            this.invalidSession();
                            break;
                        case (Result.NoRecords):
                            this.messages.showMessages('No se encontraron registros para esta consulta', 'ERROR');
                            break;
                        case (Result.Error):
                            console.log(response);
                            this.messages.showMessages('Error de servidor', 'ERROR');
                            break;
                    }
                }
            );
        } else {
            controller = 'GetCatalogs';
            this.catalogsService.getCatalogs(controller, request).subscribe(
                response => {
                    switch (response.result) {
                        case (Result.Success):
                            this.listcatalogs = response.listCatalogs;
                            this.totalRecords = this.listcatalogs.length;
                            this.newCatalogs = true;
                            break;
                        case (Result.InvalidSession):
                            this.invalidSession();
                            break;
                        case (Result.NoRecords):
                            this.messages.showMessages('No se encontraron registros para esta consulta', 'ERROR');
                            break;
                        case (Result.Error):
                            console.log(response);
                            this.messages.showMessages('Error de servidor', 'ERROR');
                            break;
                    }
                }
            );
        }

    }
    getCatalogsByValue(value) {
        this.listcatalogs = [];
        this.listcatalogsESP = [];
        let controller = '';
        if (this.tableName === 'TBL_ESP') {
            const request = new CatalogsESP();
            request.ESP = value;
            controller = 'GetCatalogsESPByESP';
            this.catalogsService.getCatalogs(controller, request).subscribe(
                response => {
                    switch (response.result) {
                        case (Result.Success):
                            this.listcatalogsESP = response.listESP;
                            this.totalRecordsESP = this.listcatalogsESP.length;
                            this.newCatalogs = true;
                            break;
                        case (Result.InvalidSession):
                            this.invalidSession();
                            break;
                        case (Result.NoRecords):
                            this.messages.showMessages('No se encontraron registros para esta consulta', 'ERROR');
                            break;
                        case (Result.Error):
                            console.log(response);
                            this.messages.showMessages('Error de servidor', 'ERROR');
                            break;
                    }
                }
            );
        } else {
            const request = new CrudCatalogsIn();
            request.tableName = this.tableName;
            request.Value = value;
            controller = 'GetCatalogsByValue';
            this.catalogsService.getCatalogs(controller, request).subscribe(
                response => {
                    switch (response.result) {
                        case (Result.Success):
                            this.listcatalogs = response.listCatalogs;
                            this.totalRecords = this.listcatalogs.length;
                            this.newCatalogs = true;
                            break;
                        case (Result.InvalidSession):
                            this.invalidSession();
                            break;
                        case (Result.NoRecords):
                            this.messages.showMessages('No se encontraron registros para esta consulta', 'ERROR');
                            break;
                        case (Result.Error):
                            console.log(response);
                            this.messages.showMessages('Error de servidor', 'ERROR');
                            break;
                    }
                }
            );
        }

    }
    openModal() {
        this.ModalTitle = 'Guardar catalogo';
        this.ModalAceptText = 'Guardar';
        this.Modal.open();
    }
    closeModal() {
        this.hasError = false;
        this.catalogsForm.reset();
        this.catalogsId = null;
    }
    saveCatalogs() {
        let request = new CrudCatalogsIn();
        let requestESP = new CatalogsESP();
        let requestData = null;
        let controller = '';
        if (this.catalogsId === undefined) {
            controller = 'CreateCatalogs';
            request.tableName = this.tableName;
            request.Code = this.catalogsForm.value.Code;
            request.Value = this.catalogsForm.value.Value;
            request.CodeDepartment = this.catalogsForm.value.CodeDepartment;
            request.DaneCode = this.catalogsForm.value.DaneCode;
            request.Department = this.catalogsForm.value.Department;
            request.Description = this.catalogsForm.value.Description;
            request.Detalle = this.catalogsForm.value.Detalle;
            request.Name = this.catalogsForm.value.Name;
            request.ShortDescription = this.catalogsForm.value.ShortDescription;
            request.TablaBizagi = this.catalogsForm.value.TablaBizagi;
            requestESP.CodigoESP = this.catalogsForm.value.CodigoESP;
            requestESP.ESP = this.catalogsForm.value.ESP;
            requestESP.LongitudMaxima = this.catalogsForm.value.LongitudMaxima;
            requestESP.LongitudMinima = this.catalogsForm.value.LongitudMinima;
            requestESP.TipoProceso = this.catalogsForm.value.TipoProceso;
            requestESP.TipoProdictoId = this.catalogsForm.value.TipoProdictoId;
            requestESP.ValidacionNIEESP = this.catalogsForm.value.ValidacionNIEESP;
            requestESP.ValorMinimo = this.catalogsForm.value.ValorMinimo;
            requestESP.ValorMaximo = this.catalogsForm.value.ValorMaximo;
            requestESP.Activo = this.catalogsForm.value.Activo;
            if (this.tableName != 'TBL_ESP') {
                requestData = request;
            } else {
                requestData = requestESP;
            }

        } else {
            request.tableName = this.tableName;
            if (this.tableName === 'Tbl_CitySIIF') {
                controller = 'UpdateCatalogs';
                request.CityId = this.catalogsId;
            } else if (this.tableName === 'Tbl_CountrySIIF') {
                controller = 'UpdateCatalogs';
                request.CountryId = this.catalogsId;
            } else if (this.tableName === 'Tbl_Currency') {
                controller = 'UpdateCatalogs';
                request.Id = this.catalogsId;
            } else if (this.tableName === 'Tbl_CurrencyOperationTypes') {
                controller = 'UpdateCatalogs';
                request.Id = this.catalogsId;
            } else if (this.tableName === 'Tbl_DatoCatalogo') {
                controller = 'UpdateCatalogs';
                request.ID = this.catalogsId;
            } else if (this.tableName === 'Tbl_DepartamentSIIF') {
                controller = 'UpdateCatalogs';
                request.DepartmentId = this.catalogsId;
            } else if (this.tableName === 'Tbl_Department') {
                controller = 'UpdateCatalogs';
                request.ID = this.catalogsId;
            } else if (this.tableName === 'Tbl_IdentificationSIIF') {
                controller = 'UpdateCatalogs';
                request.Id = this.catalogsId;
            } else if (this.tableName === 'Tbl_IdentificationTypeSIIF') {
                controller = 'UpdateCatalogs';
                request.Id = this.catalogsId;
            } else if (this.tableName === 'Tbl_IncomeSource' || this.tableName === 'Tbl_OccupationSIIF' || this.tableName === 'Tbl_ProfessionSIIF') {
                controller = 'UpdateCatalogs';
                request.Id = this.catalogsId;
            } else if (this.tableName === 'TBL_ESP') {
                controller = 'CreateUpdateESP';
                requestESP.idEsp = this.catalogsId;

            }
            else {
                controller = 'UpdateCatalogs';
                request.iD = String(this.catalogsId);
            }
            request.Code = this.catalogsForm.value.Code;
            request.Value = this.catalogsForm.value.Value;
            request.CodeDepartment = this.catalogsForm.value.CodeDepartment;
            request.DaneCode = this.catalogsForm.value.DaneCode;
            request.Department = this.catalogsForm.value.Department;
            request.Description = this.catalogsForm.value.Description;
            request.Detalle = this.catalogsForm.value.Detalle;
            request.Name = this.catalogsForm.value.Name;
            request.ShortDescription = this.catalogsForm.value.ShortDescription;
            request.TablaBizagi = this.catalogsForm.value.TablaBizagi;
            requestESP.CodigoESP = this.catalogsForm.value.CodigoESP;
            requestESP.ESP = this.catalogsForm.value.ESP;
            requestESP.LongitudMaxima = this.catalogsForm.value.LongitudMaxima;
            requestESP.LongitudMinima = this.catalogsForm.value.LongitudMinima;
            requestESP.TipoProceso = this.catalogsForm.value.TipoProceso;
            requestESP.TipoProdictoId = this.catalogsForm.value.TipoProdictoId;
            requestESP.ValidacionNIEESP = this.catalogsForm.value.ValidacionNIEESP;
            requestESP.ValorMinimo = this.catalogsForm.value.ValorMinimo;
            requestESP.ValorMaximo = this.catalogsForm.value.ValorMaximo;
            requestESP.Activo = this.catalogsForm.value.Activo;
            if (this.tableName != 'TBL_ESP') {
                requestData = request;
            } else {
                requestData = requestESP;
            }
        }
        this.catalogsService.getCatalogs(controller, requestData).subscribe(
            response => {
                switch (response.result) {
                    case (Result.Success):
                        this.closeModal();
                        this.Modal.closeModal();
                        this.getCatalogs();
                        this.messages.showMessages('Guardado correctamente', 'SUCCESS');
                        break;
                    case (Result.InvalidSession):
                        this.closeModal();
                        this.invalidSession();
                        this.Modal.closeModal();
                        break;
                    case (Result.Error):
                        this.closeModal();
                        this.Modal.closeModal();
                        console.log(response);
                        this.messages.showMessages('Error de servidor', 'ERROR');
                        break;
                }
            }
        );

    }
    catalogsSelected(e) {
        this.Modal.open();
        this.ModalAceptText = 'Editar';
        this.ModalTitle = 'Editar Catalogo'
        if (this.tableName === 'Tbl_CitySIIF') {
            this.catalogsId = e.data.CityId;
        } else if (this.tableName === 'Tbl_CountrySIIF') {
            this.catalogsId = e.data.CountryId;
        } else if (this.tableName === 'Tbl_Currency') {
            this.catalogsId = e.data.Id;
        } else if (this.tableName === 'Tbl_CurrencyOperationTypes') {
            this.catalogsId = e.data.Id;
        } else if (this.tableName === 'Tbl_DatoCatalogo') {
            this.catalogsId = e.data.ID;
        } else if (this.tableName === 'Tbl_DepartamentSIIF') {
            this.catalogsId = e.data.DepartmentId;
        } else if (this.tableName === 'Tbl_Department') {
            this.catalogsId = e.data.ID;
        } else if (this.tableName === 'TBL_ESP') {
            this.catalogsId = e.data.idEsp;
        } else if (this.tableName === 'Tbl_IdentificationSIIF') {
            this.catalogsId = e.data.Id;
        } else if (this.tableName === 'Tbl_IdentificationTypeSIIF') {
            this.catalogsId = e.data.Id;
        } else if (this.tableName === 'Tbl_IncomeSource' || this.tableName === 'Tbl_OccupationSIIF' || this.tableName === 'Tbl_ProfessionSIIF') {
            this.catalogsId = e.data.Id;
        } else {
            this.catalogsId = e.data.ID;
        }
        this.catalogsForm.patchValue({
            Code: e.data.Code,
            Value: e.data.Value,
            CodeDepartment: e.data.CodeDepartment,
            Department: e.data.Department,
            DepartamentId: e.data.DepartamentId,
            DaneCode: e.data.DaneCode,
            Description: e.data.Description,
            ShortDescription: e.data.ShortDescription,
            Name: e.data.Name,
            Detalle: e.data.Detalle,
            TablaBizagi: e.data.TablaBizagi,
            CountryId: e.data.CountryId,
            CodigoESP: e.data.CodigoESP,
            Activo: e.data.Activo,
            ESP: e.data.ESP,
            LongitudMinima: e.data.LongitudMinima,
            LongitudMaxima: e.data.LongitudMaxima,
            TipoProdictoId: e.data.TipoProdictoId,
            TipoProceso: e.data.TipoProceso,
            ValidacionNIEESP: e.data.ValidacionNIEESP,
            ValorMinimo: e.data.ValorMinimo,
            ValorMaximo: e.data.ValorMaximo
        });
    }
    getTableFields() {
        this.controls = [];
        const request = new GetTableFields();
        request.TableName = this.tableName;
        let controller = 'GetTableFields';
        this.catalogsService.getTableFields(controller, request).subscribe(
            response => {
                switch (response.result) {
                    case (Result.Success):
                        this.listTableFields = response.listTableFields;
                        this.listTableFields.forEach(tf => {
                            if (tf.Column_Name.toUpperCase().includes('ID') && tf.Ordinal_Position == 1) {
                                const control = new TexBoxCatalogs({
                                    key: tf.Column_Name,
                                    label: tf.Column_Name,
                                    value: '',
                                    type: 'hide',
                                    required: true,
                                    order: tf.Ordinal_Position
                                });
                            } else if (tf.Column_Name.toUpperCase().includes('VALIDA') || tf.Ordinal_Position > 1 && tf.Data_Type == 'bit') {
                                const checkbox = new Checkboxcatalogs({
                                    key: tf.Column_Name,
                                    label: tf.Column_Name,
                                    type: 'checkbox',
                                    order: tf.Ordinal_Position
                                });
                                this.controls.push(checkbox);

                            } else if (tf.Column_Name.toUpperCase().includes('ID') && tf.Ordinal_Position > 1) {
                                const dropdown = new DropdowCcatalogs({
                                    key: tf.Column_Name,
                                    label: tf.Column_Name,
                                    options: this.listOptions,
                                    order: tf.Ordinal_Position
                                });
                                this.controls.push(dropdown);

                            }  else {
                                const control = new TexBoxCatalogs({
                                    key: tf.Column_Name,
                                    label: tf.Column_Name,
                                    value: '',
                                    required: true,
                                    order: tf.Ordinal_Position
                                })
                                this.controls.push(control);
                            }
                        });
                        this.catalogsForm = this.catalogsFormService.toFormGroup(this.controls);
                        this.dinamyForm = true;
                        break;
                    case (Result.InvalidSession):
                        this.closeModal();
                        this.invalidSession();
                        this.Modal.closeModal();
                        break;
                    case (Result.Error):
                        this.closeModal();
                        this.Modal.closeModal();
                        console.log(response);
                        this.messages.showMessages('Error de servidor', 'ERROR');
                        break;
                }
            }
        );
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
    getSettings() {
        let json = {};
        let listcolumns: any[] = [];
        if (this.tableName === 'Tbl_CitySIIF') {
            this.allcatalogs = false;
            this.labelSearch = 'Descripcion';
            json = { CityId: { title: 'Ciudad ID', filter: false, width: '30%' }, Description: { title: 'Descripcion', filter: false, width: '30%' }, DepartamentId: { title: 'Departamento ID', filter: false, width: '30%' }, DaneCode: { title: 'Codigo Dane', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
            const request = new CrudCatalogsIn();
            request.tableName = 'Tbl_Department';
            this.catalogsService.getCatalogs('GetCatalogs', request).subscribe(
                response => {
                    this.listDepartment = response.listCatalogs;
                    this.listDepartment.forEach(opt => {
                        const option = { key: opt.ID, value: opt.Department }
                        this.listOptions.push(option);
                    });
                });
        }
        else if (this.tableName === 'Tbl_CountrySIIF') {
            this.allcatalogs = false;
            this.labelSearch = 'Descripcion';
            json = { CountryId: { title: 'Pais ID', filter: false, width: '30%' }, Description: { title: 'Descripcion', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
        } else if (this.tableName === 'Tbl_Currency') {
            this.allcatalogs = false;
            this.labelSearch = 'Descripcion';
            json = { Id: { title: 'ID', filter: false, width: '30%' }, Name: { title: 'Nombre', filter: false, width: '30%' }, ShortDescription: { title: 'Descripcion', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
        } else if (this.tableName === 'Tbl_CurrencyOperationTypes') {
            this.allcatalogs = false;
            this.labelSearch = 'Descripcion';
            json = { Id: { title: 'ID', filter: false, width: '30%' }, Description: { title: 'Descripcion', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
        } else if (this.tableName === 'Tbl_DatoCatalogo') {
            this.allcatalogs = false;
            this.labelSearch = 'Detalle';
            json = { ID: { title: 'ID', filter: false, width: '30%' }, Detalle: { title: 'Detalle', filter: false, width: '30%' }, TablaBizagi: { title: 'Tabla Bizagi', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
        } else if (this.tableName === 'Tbl_DepartamentSIIF') {
            this.allcatalogs = false;
            this.labelSearch = 'Descripcion';
            json = { DepartmentId: { title: 'Departamento ID', filter: false, width: '30%' }, Description: { title: 'Descripcion', filter: false, width: '30%' }, CountryId: { title: 'Pais Id', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
            const request = new CrudCatalogsIn();
            request.tableName = 'Tbl_CountrySIIF';
            this.catalogsService.getCatalogs('GetCatalogs', request).subscribe(
                response => {
                    this.listDepartment = response.listCatalogs;
                    this.listDepartment.forEach(opt => {
                        const option = { key: opt.CountryId, value: opt.Description };
                        this.listOptions.push(option);
                    });
                });
        } else if (this.tableName === 'Tbl_Department') {
            this.allcatalogs = false;
            this.labelSearch = 'Departamento';
            json = { ID: { title: 'ID', filter: false, width: '30%' }, Department: { title: 'Departamento', filter: false, width: '30%' }, DaneCode: { title: 'Codigo Dane', filter: false, width: '30%' }, CodeDepartment: { title: 'Codigo Departamento', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
        } else if (this.tableName === 'TBL_ESP') {
            this.allcatalogs = false;
            this.labelSearch = 'ESP';
            json = {
                idEsp: { title: 'ID', filter: false, width: '30%' }, CodigoESP: { title: 'Codigo ESP', filter: false, width: '30%' }, ESP: { title: 'ESP', filter: false, width: '30%' }, LongitudMinima: { title: 'Longitud Minima', filter: false, width: '30%' },
                LongitudMaxima: { title: 'Longitud Maxima', filter: false, width: '30%' }, TipoProceso: { title: 'Tipo Proceso', filter: false, width: '30%' }, ValorMinimo: { title: 'Valor Minimo', filter: false, width: '30%' }, ValorMaximo: { title: 'Valor Maximo', filter: false, width: '30%' }
            };
            listcolumns.push(json);
            json = {};
            const request = new CrudCatalogsIn();
            request.tableName = 'Tbl_ProductType';
            this.catalogsService.getCatalogs('GetCatalogs', request).subscribe(
                response => {
                    this.listDepartment = response.listCatalogs;
                    this.listDepartment.forEach(opt => {
                        const option = { key: opt.ID, value: opt.Value };
                        this.listOptions.push(option);
                    });
                });
        } else if (this.tableName === 'Tbl_IdentificationTypeSIIF' || this.tableName === 'Tbl_OccupationSIIF' || this.tableName === 'Tbl_ProfessionSIIF') {
            this.allcatalogs = false;
            this.labelSearch = 'Descripcion';
            json = {
                Id: { title: 'ID', filter: false, width: '30%' }, Value: { title: 'Descripcion', filter: false, width: '30%' }
            };
            listcolumns.push(json);
            json = {};
        } else if (this.tableName === 'Tbl_IncomeSource') {
            this.allcatalogs = false;
            this.labelSearch = 'Descripcion';
            json = {
                Id: { title: 'ID', filter: false, width: '30%' }, Description: { title: 'Descripcion', filter: false, width: '30%' }
            };
            listcolumns.push(json);
            json = {};
        } else {
            this.allcatalogs = true;
            this.labelSearch = 'Descripcion';
            json = { ID: { title: 'ID', filter: false, width: '30%' }, Code: { title: 'Codigo', filter: false, width: '30%' }, Value: { title: 'Descripcion', filter: false, width: '30%' } };
            listcolumns.push(json);
            json = {};
        }

        const settings = {
            actions: {
                add: false,
                edit: true,
                copy: false,
                delete: false,
                position: 'left',
                columnTitle: '',
            },
            hideSubHeader: true,
            mode: 'external',
            edit: {
                editButtonContent: '<i class="ti-pencil text-credi m-r-10"></i>',
                saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
                cancelButtonContent: '<i class="ti-close text-danger"></i>',
                confirmSave: true
            },
            delete: {
                deleteButtonContent: '<i class="ti-trash text-danger m-r-10"></i>',
                saveButtonContent: '<i class="ti-save text-success m-r-10"></i>',
                cancelButtonContent: '<i class="ti-close text-danger"></i>',
                confirmDelete: true,
            }
        };
        let columns: any = {};
        columns = Object.assign({}, listcolumns);
        (<any>settings).columns = columns[0];
        return settings;

    }
}