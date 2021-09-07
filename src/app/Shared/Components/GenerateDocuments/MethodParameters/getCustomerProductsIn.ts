import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetCustomerProductsIn extends BaseIn{
    public identificationType: string;
    public identificationNumber: string;

}
export class RequestCertificateIn extends BaseIn{
    public productNumber: string;
    
}
export const PATHNAMEREQUEST =  {
    GETCUSTOMERPRODUCTS: 'pymes/getCustomerProducts',
    GETBALANCESAVECERTIFICATE: 'pymes/getPazySalvoCertificate',
    GETACCOUNTDAYCERTIFICATE: 'pymes/getCuentaalDiaCertificate',
    GETSUMMARYACCOUNT: 'savingsAccount/getAccountSummary',
    GETACCOUNTMOVEMENTS: 'savingsAccount/GetAccountMov',
    GEtPRODUCTSACCOUNT: 'savingsAccount/getUserProducts'

}
