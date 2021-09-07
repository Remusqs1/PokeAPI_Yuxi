import { BaseIn } from '../../../../../Commons/Classes/baseIn';


export class GetRequestFiltersIn extends BaseIn {

    public adviserId: string;

    public id: string;

    public filingNumber: string;

    public pageSize: number;

    public pageNumber: number;

    public orderBy: string;

    public orderDirection: string;

    public download: boolean;


}