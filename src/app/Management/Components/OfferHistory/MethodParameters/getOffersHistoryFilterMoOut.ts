import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { Offer } from '../../../../Commons/Entities/offer';

export class GetOffersHistoryFilterMoOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Management.GetOffersHistoryFilterMoOut, SD.MethodParameters';

    public offers:Array<Offer>;

	public totalRecords:number;
}
