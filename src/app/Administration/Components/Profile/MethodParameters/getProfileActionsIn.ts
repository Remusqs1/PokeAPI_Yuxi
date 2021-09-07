import { BaseIn } from '../../../../Commons/Classes/baseIn';


export class GetProfileActionsIn extends BaseIn {

  public $type = 'SD.MethodParameters.Administration.Profile.GetProfileActionsIn, SD.MethodParameters';

  public profileId: number;

  public act_portal: number;

}
