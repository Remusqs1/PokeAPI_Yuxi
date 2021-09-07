import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { Agreement } from '../../../../Commons/Entities/agreement';
import { DocumentAgreement } from './documentAgreement';

export class SelectDocumentAgreementOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Agreement.SelectDocumentAgreementOut, SD.MethodParameters';

    agreement:Array<DocumentAgreement>;
    //public campaign: Campaign;
}
