import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { CampaignField } from './campaignField';

export class SelectFieldOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.SelectFieldOut, SD.MethodParameters';

    field:Array<CampaignField>;

}
