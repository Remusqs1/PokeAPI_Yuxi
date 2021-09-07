import * as moment from 'moment';
import { BaseOut } from '../Classes/baseOut';
import { Departments } from '../Entities/departments';

export class GetDepartmentsOut extends BaseOut {

  public $type = 'SD.MethodParameters.General.Common.GetDepartmentsOut, SD.MethodParameters';

  public departments: Array<Departments>;
}
