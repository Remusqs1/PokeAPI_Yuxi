
import * as moment from 'moment';

export class Company {

  public $type = 'SD.Entities.Company, SD.Entities';

  public comID: number;

  public docID: string;

  public com_num_doc: string;

  public com_name: string;

  public com_user_crea: number;

  public com_crea_date: Date | moment.Moment;

  public com_user_mod: number;

  public com_mod_date: Date | moment.Moment;

  public com_status: string;

  public doc_description: string;

}
