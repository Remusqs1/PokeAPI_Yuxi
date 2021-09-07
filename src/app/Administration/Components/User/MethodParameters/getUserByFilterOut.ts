
import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { UserByFilter } from './userByfilter';

export class GetUserByFilterOut extends BaseOut {

  public listGetUserByFilter: Array<UserByFilter>;

  public totalRecords: number;
 
}
