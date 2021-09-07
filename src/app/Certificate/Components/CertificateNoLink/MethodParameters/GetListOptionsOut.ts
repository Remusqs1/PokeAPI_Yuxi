import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetListOptionsOut extends BaseOut {
    ListOptionsDoc: ListOptionsDoc[];
    public Message: string;
    public Result: number;
}

export class ListOptionsDoc {

    public Value: string;
    public Description: string;
}