import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetCustomerProductsOut extends BaseOut {
    Products: CustomerProducts[];
}
export class CustomerProducts {
    Product: string;
    ProductType: string;
}