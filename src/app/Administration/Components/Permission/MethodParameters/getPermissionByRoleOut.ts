import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { PermissionByRole } from './permissionByRole';

export class GetPermissionByRoleOut extends BaseOut {

  public listPermissions: Array<PermissionByRole>
 
}
