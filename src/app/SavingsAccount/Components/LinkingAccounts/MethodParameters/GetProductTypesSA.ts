import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetProductTypesSA extends BaseOut {
    public ProductsSA: ProductSa[]
}

export class ProductSa {
    public ProductTypeId: string;
    public ProductDescription: string;
}