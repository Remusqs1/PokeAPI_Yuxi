import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { Agreement } from '../../../../Commons/Entities/agreement';

export class SelectAgreementFilterOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Agreement.SelectAgreementFilterOut, SD.MethodParameters';

    agreement:Array<Agreement>;
    //public campaign: Campaign;
}
