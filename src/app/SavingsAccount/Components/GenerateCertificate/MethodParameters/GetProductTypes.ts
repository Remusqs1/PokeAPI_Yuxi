import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetProductTypesOut extends BaseOut {
    public ProductTypesGc: ProductTypesGc[];
}

export class ProductTypesGc {
    public AccountTypeId: string;
    public Description: string;
    public AccountType: string;
}




