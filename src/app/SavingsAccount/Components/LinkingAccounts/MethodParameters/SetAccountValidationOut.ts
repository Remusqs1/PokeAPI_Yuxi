import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class AccountValidationOut extends BaseOut {
    User: string;
    AssociationDate: Date;
    CustomerIdentification: string;
    CustomerAccountNumber: string;
    CustomerCardNumber: string;
}