import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class CreateAgreementIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.CreateCampaignIn, SD.MethodParameters';

    code:string;
    documentNumber:string;
    name:string;
    flexibleFee:boolean;
    status:string;
}
