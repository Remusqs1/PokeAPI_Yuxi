
import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { UserResult } from './userResult';

export class GetUserByFilterOut extends BaseOut {

  public listGetUserByFilter: Array<UserResult>;

  public totalRecords: number;
 
}
