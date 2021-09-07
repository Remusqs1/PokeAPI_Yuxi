import { BaseIn } from '../../../../Commons/Classes/baseIn';
import { Campaign } from './campaign';

export class DeleteCampaignIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.DeleteCampaignIn, SD.MethodParameters';

    public campaign: Campaign;



}
