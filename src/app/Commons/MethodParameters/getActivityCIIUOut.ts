

import * as moment from 'moment';
import { BaseOut } from '../Classes/baseOut';
import { ActivityCIIU } from '../Entities/activityCIIU';

export class GetActivityCIIUOut extends BaseOut {
  public $type = 'SD.MethodParameters.General.Common.GetActivityCIIUOut, SD.MethodParameters';
  public activityCIIU: Array<ActivityCIIU>;



}
