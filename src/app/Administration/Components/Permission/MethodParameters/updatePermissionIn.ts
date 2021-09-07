import { BaseIn } from '../../../../Commons/Classes/baseIn';
import { Permission } from './permission';

export class UpdatePermissionIn extends BaseIn {

    public pm_code: string;

    public pm_name: string;

    public pm_description: string;

    public pm_modificationUser: string;

    public pm_status: string;

}
