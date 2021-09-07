import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class UpdateAgreementIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Agreement.UpdateAgreementIn, SD.MethodParameters';

    agrID:number;
    code:string;
    documentNumber:string;
    name:string;
    flexibleFee:boolean;
    status:string;

    //public campaign: Campaign;
}
