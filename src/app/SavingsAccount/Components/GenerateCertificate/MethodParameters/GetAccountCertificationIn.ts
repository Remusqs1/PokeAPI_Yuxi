import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetAccountCertificationIn extends BaseIn {
    public IdentificationType: string;
    public IdentificationNumber: string;
    public AccountType: number;
    public AccountNumber: string;
}
export class GetAccountMovementsIn extends BaseIn{
    public IdentificationType: string;
    public IdentificationNumber: string;
    public AccountType: number;
    public AccountNumber: string;
    public dateStart: string;
    public dateLimit: string;
    public userName: string
}