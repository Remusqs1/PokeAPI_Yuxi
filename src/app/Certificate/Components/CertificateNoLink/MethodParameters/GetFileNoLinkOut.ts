import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetFileNoLinkOut extends BaseOut {
    public getFileName: string;
    public file: string;
    public Message: string;
    public Result: number;
    ListEmail: ListEmail[];
}

export class ListEmail {

    public CodeField: string;
    public MessageField: string;
    public Message: string;
    public Code: string;
    public Result: number;
}



