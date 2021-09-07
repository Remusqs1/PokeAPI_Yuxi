import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetUserByFilterIn extends BaseIn {

  public usr_userName: string;
  
  public usr_numberDocument: string;

  public rl_name: string;

  public pageSize: number;

  public pageNumber: number;

  public orderBy: string;

  public orderDirection: string;

  public totalRecords: number = 0;

}
