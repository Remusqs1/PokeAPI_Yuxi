import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class AsignDocumentAgreementIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Agreement.AsignDocumentAgreementIn, SD.MethodParameters';

    documentID:number;
    agreementID:number;
    display:boolean;
    edit:boolean;
    status:string;
}
