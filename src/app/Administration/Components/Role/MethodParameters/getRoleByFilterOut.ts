import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { Role } from './role';

export class GetRoleByFilterOut extends BaseOut {

  public listRoleByFilter: Array<Role>;

  public totalRecords: number;
 
}
