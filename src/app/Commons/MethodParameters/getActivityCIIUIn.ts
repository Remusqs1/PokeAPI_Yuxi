
import * as moment from 'moment';
import { BaseIn } from '../Classes/baseIn';
import { ActivityCIIU } from '../Entities/activityCIIU';

export class GetActivityCIIUIn extends BaseIn {
  public $type: 'SD.MethodParameters.General.Common.GetActivityCIIUIn, SD.MethodParameters';
  public activityCIIU: ActivityCIIU;
}
