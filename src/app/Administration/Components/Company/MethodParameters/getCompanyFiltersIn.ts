import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetCompanyFiltersIn extends BaseIn {

  public $type = 'SD.MethodParameters.Administration.Company.GetCompanyFiltersIn, SD.MethodParameters';

  public name: string;

  public typeDocument: string;

  public documentNumber: string;

  public state: string;

  public pageSize: number;

  public pageNumber: number;

  public orderBy: string;

  public orderDirection: string;

}
