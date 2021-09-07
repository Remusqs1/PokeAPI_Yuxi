import { BaseOut } from '../../../Commons/Classes/baseOut';
import { Pages } from './BaseInDocumentManager';

export class GetProducts extends BaseOut {
  public responseGetProductsBE: Array<Products>;
}

export class Products extends Pages {
  public Id: number;
  public Name:string;
  public Code : string;
  public Table : string;
  public CompanyId : number;
  public IsActive: boolean;
  public CompanyName : string;
  public TotalItems : number
}
export class ProductsList {
  public Id: number;
  public Name:string;
  public Code : string;
  public Table : string;
  public CompanyId : number;
  public IsActive: boolean;
  public ListDocumentTypeBE :null
}