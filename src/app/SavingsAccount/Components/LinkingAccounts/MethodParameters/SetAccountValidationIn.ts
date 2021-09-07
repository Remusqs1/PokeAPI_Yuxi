import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class AccountValidationIn extends BaseIn {
    User: string;
    CustomerIdentification: string;
    CustomerAccountNumber: string;
    CustomerCardNumber: string;
    ProviderMessage: string;
    ProviderMessageCode: string;
}