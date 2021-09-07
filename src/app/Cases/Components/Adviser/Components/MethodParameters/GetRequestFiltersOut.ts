import { BaseIn } from '../../../../../Commons/Classes/baseIn';
import { BaseOut } from '../../../../../Commons/Classes/baseOut';


export class GetRequestFiltersOut extends BaseOut {

    public cases: RequestFilterOut[];

    public totalRecords: number;

    public fileBase64: string;

}



export class RequestFilterOut {


    public CreationDate: string;
    public TypeId: number;
    public Id: string;
    public FirstName: string;
    public SecondName: string;
    public Surname: string;
    public SecondSurname: string;
    public Mobile: string;
    public Email: string;
    public FilingNumber: string;
    public CompanyId: number;
    public Status: string;
    public ApplicantId: number;


}