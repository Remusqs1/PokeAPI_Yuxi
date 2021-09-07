import { Campaign } from './campaign';
import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class SelectAllCampaignOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.SelectAllCampaignOut, SD.MethodParameters';

    public campaign: Array<Campaign>;

}
