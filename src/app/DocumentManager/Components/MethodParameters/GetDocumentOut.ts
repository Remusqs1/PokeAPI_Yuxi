import { BaseOut } from '../../../Commons/Classes/baseOut';
import * as moment from 'moment';

export class GetDocumentOut extends BaseOut {
    public Documents: Document[];
}
export class Document {
    public Name: string;
    public GuidId: string;
    public Identification: string;
    public Extension: string;
    public CreationDate: Date;
    public File: string;
    public ProductId: number;
    public TypeId: number;
    public IsActive: boolean;
    public TypeName: string;
    public ProductName: string;
    public TotalItems: number;
    public CaseId: string;
    public CompanyName: string;
    public CompanyId: number;
    public CommentsInnactive: string;
    public SignActive: boolean;
    public SignDateUpdate: Date | moment.Moment;
}