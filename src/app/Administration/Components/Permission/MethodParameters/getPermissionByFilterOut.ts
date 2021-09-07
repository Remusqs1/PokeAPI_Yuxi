
import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { Permission } from './permission';

export class GetPermissionByFilterOut extends BaseOut {

  public listPermissions: Array<Permission>;

  public totalRecords: number;
 
}
