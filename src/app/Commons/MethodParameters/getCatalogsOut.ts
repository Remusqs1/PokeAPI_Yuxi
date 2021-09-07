
import { BaseOut } from '../Classes/baseOut';
import { Catalogs } from '../Entities/catalogs';

import * as moment from 'moment';

export class GetCatalogsOut extends BaseOut {

  public $type = 'SD.MethodParameters.General.Common.GetCatalogsOut, SD.MethodParameters';

  public catalogs: Array<Catalogs>;

}
