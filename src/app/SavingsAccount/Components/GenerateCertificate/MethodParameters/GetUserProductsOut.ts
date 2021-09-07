import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetUserProductsOut extends BaseOut {
    listAccounts: Products[];
}

export class Products {

    public accountNumber: string;
    public accountType: number;
    public availableBalance: number;
    public balanceExchange: number;
    public totalBalance: number;
    public typeCurrency: string;
    public creditLimit: number;

}




