import { BaseOut } from '../../../Commons/Classes/baseOut';
import { Pages } from './BaseInDocumentManager';

export class GetCompanies extends BaseOut {
  public responseGetCompanyBEList: Array<Company>;
}

export class Company extends Pages {
  public Id: number;
  public Name:string;
  public Code: string;
  public IsActive : boolean;

}
