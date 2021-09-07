import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class ChangePasswordIn extends BaseIn {

  usc_code: string;
  usr_code: string;
  usr_password: string;
  usr_OldPassword: string;

}