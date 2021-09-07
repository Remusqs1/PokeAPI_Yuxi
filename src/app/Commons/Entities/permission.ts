
import * as moment from 'moment';

export class Permission {

  public $type = 'ManagerSystemAPI.Entities.Database.Permission, ManagerSystemAPI.Entities';

  public pmID: number;

  public pm_code: string;

  public pm_name: string;

  public pm_description: string;

  public pm_status: string;

  public pm_creation_date: Date | moment.Moment;

  public pm_user_creation: number;

  public pm_modification_date: Date | moment.Moment;

  public pm_user_modification: number;

}
