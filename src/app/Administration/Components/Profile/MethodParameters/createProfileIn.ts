import { Profile } from '../../../../Commons/Entities/profile';
import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class CreateProfileIn extends BaseIn {

  public $type = 'SD.MethodParameters.Administration.Profile.CreateProfileIn, SD.MethodParameters';

  public profile: Profile;

}
