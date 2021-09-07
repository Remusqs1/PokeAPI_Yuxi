import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetPermissionByFilterIn extends BaseIn {

  public pm_code: string;

  public pm_name: string;

  public pageSize: number;

  public pageNumber: number;

  public orderBy: string;

  public orderDirection: string;

  public totalRecords: number = 0;

}
