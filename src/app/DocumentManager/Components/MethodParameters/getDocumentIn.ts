import { BaseIn } from '../../../Commons/Classes/baseIn';

export class GetDocumentIn {
    public Name: string;
    public Identification: string;
    public Extension: string;
    public ProductId: number;
    public CreationDate: string;
    public TypeId: number;
    public CompanyId: number;
    public GuidId: string;
    public IsActive: boolean;
    public CaseId: string;
    public PageNumber: number;
    public PageSize: number;  
}