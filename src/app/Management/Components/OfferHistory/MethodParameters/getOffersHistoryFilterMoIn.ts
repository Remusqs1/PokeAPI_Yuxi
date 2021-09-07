import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetOffersHistoryFilterMoIn extends BaseIn {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Management.GetOffersHistoryFilterMoIn, SD.MethodParameters';
	   
	public documentNumber:string;

	public offStatus:string;	

	public comID:number;

	public offID:number;

	public pageSize:number;

	public pageNumber:number;

	public orderBy:string;

	public orderDirection:string;



}
