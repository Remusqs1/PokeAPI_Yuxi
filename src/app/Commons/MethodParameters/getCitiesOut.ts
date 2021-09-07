import * as moment from 'moment';
import { BaseOut } from '../Classes/baseOut';
import { Cities } from '../Entities/cities';

export class GetCitiesOut extends BaseOut {

  public $type = 'SD.MethodParameters.General.Common.GetCitiesOut, SD.MethodParameters';

  public cities: Array<Cities>;
}
