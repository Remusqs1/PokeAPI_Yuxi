import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class SelectAgreementFilterIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Agreement.SelectAgreementFilterIn, SD.MethodParameters';

    nameAgreement:string;
    documentNumber:string;
    operation:number;
    public status: string;
    //public campaign: Campaign;
}
