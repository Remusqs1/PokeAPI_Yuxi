import { Campaign } from './campaign';
import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class SelectCampaignFilterOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.SelectCampaignFilterOut, SD.MethodParameters';

    campaign:Array<Campaign>;

}
