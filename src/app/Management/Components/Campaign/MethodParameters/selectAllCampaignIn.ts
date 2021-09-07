import { BaseIn } from '../../../../Commons/Classes/baseIn';
import { Campaign } from './campaign';

export class SelectAllCampaignIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.SelectAllCampaignIn, SD.MethodParameters';

    public campaign: Campaign;

    public status: string;

}
