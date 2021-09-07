import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetFilePaymentIn extends BaseIn {
    public  productBankIdentifier: string;
    public  productBankPaymentDate: string;
    public  productBankShareValue:string ;
    public  productBankPaymentValue: string; 
    public  productBankSendMail: boolean ;
    public  Channel: string ;
    public  IdUser: string ;
}


