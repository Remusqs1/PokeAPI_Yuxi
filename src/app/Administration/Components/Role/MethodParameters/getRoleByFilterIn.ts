import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetRoleByFilterIn extends BaseIn {

  public rl_code: string;

  public rl_name: string;

  public pageSize: number;

  public pageNumber: number;

  public orderBy: string;

  public orderDirection: string;

  public totalRecords: number = 0;

}