import { BaseOut } from '../../../Commons/Classes/baseOut';
import { ProductsList } from './GetProducts';
import { Pages } from './BaseInDocumentManager';


export class GetDocumentType extends BaseOut {
  public responseGetDocumentTypeList: Array<DocumentType>;
}

export class DocumentType extends Pages {
  public PageNumber: number;
  public PageSize: number;
  public Id: number;
  public Name:string;
  public Code : string;
  public IsActive: boolean;
  public ListProductBE : ProductsList[];
  public TotalItems : number;

  constructor(){
    super();
    this.PageNumber=1;
    this.PageSize=10;
    this.Id=0;
  }

}
