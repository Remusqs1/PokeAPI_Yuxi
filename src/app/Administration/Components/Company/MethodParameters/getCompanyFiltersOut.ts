import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { Company } from '../../../../Commons/Entities/company';

export class GetCompanyFiltersOut extends BaseOut {

  public $type = 'SD.MethodParameters.Administration.Company.GetCompanyFiltersOut, SD.MethodParameters';

  public companys: Array<Company>;

  public totalRecords: number;

}
