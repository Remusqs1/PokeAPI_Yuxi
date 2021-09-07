
import { ActionByProfile } from './actionByProfile';
import * as moment from 'moment';

export class Profile {

  public $type = 'SD.Entities.Profiles, SD.Entities';

  public proID: number;

  public pro_id_homologacion: number;

  public pro_id_homologacion_cf: number;

  public pro_name: string;

  public pro_status: string;

  public pro_creation_date: Date | moment.Moment;

  public pro_user_creation: number;

  public pro_modification_date: Date | moment.Moment;

  public pro_user_modification: number;

  public pro_portal:number;

  public actionsByProfile: Array<ActionByProfile>;

}
