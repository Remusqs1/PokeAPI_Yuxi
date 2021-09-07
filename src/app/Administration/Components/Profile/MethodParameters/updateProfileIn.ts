import { BaseIn } from '../../../../Commons/Classes/baseIn';
import { Profile } from '../../../../Commons/Entities/profile';


export class UpdateProfileIn extends BaseIn {

  public $type = 'SD.MethodParameters.Administration.Profile.UpdateProfileIn, SD.MethodParameters';

  public profile: Profile;



}
