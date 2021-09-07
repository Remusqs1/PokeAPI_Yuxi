import { User } from '../Entities/user';

export class BaseIn {

  public currentUser: User;

  public currentSesId: string;

  public company: string = Company.BancoCredifinanciera.toString();

}



export enum Company {
  Credivalores = 1,
  BancoCredifinanciera = 2
}