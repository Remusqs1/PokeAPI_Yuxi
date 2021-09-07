import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class LoginIn extends BaseIn {
  
  usr_userName: string;
  usr_password: string;
  usr_type:number;

}
export class LoginSecurityIn {
  public user: string;
  public password: string;
  constructor() {}
}
