import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class UpdateCampaignIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.UpdateCampaignIn, SD.MethodParameters';

    campaignId:number;
    cam_code_campaign:string;
    campaignName:string;
    campaignCodeOrigin:string;
    campaignSalesForce:string;
    campaignStartDate:string;
    campaignEndDate:string;
    campaignClosingDate:string;
    campaignStatus:string;


}
