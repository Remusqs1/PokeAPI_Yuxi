import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { ActionByProfile } from '../../../../Commons/Entities/actionByProfile';

export class GetProfileActionsOut extends BaseOut {

  public $type = 'SD.MethodParameters.Administration.Profile.GetProfileActionsOut, SD.MethodParameters';

  public actionsByProfile: Array<ActionByProfile>;



}
