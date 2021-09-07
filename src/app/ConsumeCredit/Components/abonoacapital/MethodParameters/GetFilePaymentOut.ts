import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetFilePaymentOut extends BaseOut {
    public getFileName:string ;
    public file: string;
    ListEmail: ListEmail[];
}

export class ListEmail {

    public CodeField: string;
    public MessageField: string;
    public Message: string;
    public Code: string;
    public Result: number;
}


