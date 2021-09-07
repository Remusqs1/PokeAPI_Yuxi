import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetUserProductsOut extends BaseOut {
    ListCredit: Products[];
    public Message: string;
    public Result: number;
}

export class Products {

    public CreditNumber: string;
    public ProducyType: string;
}