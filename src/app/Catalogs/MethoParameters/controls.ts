import {CatalogsForm } from './catalogsForm';

export class TexBoxCatalogs extends CatalogsForm<string>{
    controlType = 'textbox';
}
export class DropdowCcatalogs extends CatalogsForm<string>{
    controlType = 'dropdown';
}
export class Checkboxcatalogs extends CatalogsForm<string>{
    controlType = 'checkbox';
}