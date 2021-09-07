import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class LogAuditByDateOut extends BaseOut {

    public listLogAudit: Array<LogAudit>;
    public totalRecords: number;

}
export class LogAudit {
   public audID: number;
   public usrID: number;
   public sesID: string;
   public aud_IdRequest: number;
   public aud_transaction: string;
   public aud_table: string;
   public aut_identity: number;
   public aut_status: string;
   public aut_filters: XMLDocument;
   public aut_data_before: XMLDocument;
   public aut_data_after: XMLDocument;
   public aut_ip: string;
   public aut_date: Date;
   public aut_user: string; 
}