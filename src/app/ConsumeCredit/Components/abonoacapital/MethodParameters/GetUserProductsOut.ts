import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetUserProductsOut extends BaseOut {
    ListCredit: Products[];
    ListDates: ListDates[];
    public Message: string;
    public Result: number;
}

export class Products {

    public CreditNumber: string;
    public ProducyType: string;
    public ValuePay: string;
    public EANcode: string;
}

export class ListDates {
    public Date: string;
}



