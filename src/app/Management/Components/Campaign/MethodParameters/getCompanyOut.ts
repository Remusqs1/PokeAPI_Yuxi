import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { Company } from './Company';

export class GetCompanyOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Campaign.Company, SD.MethodParameters';

    public companies: Company;

}
