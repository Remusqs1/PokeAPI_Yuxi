import * as moment from 'moment';

export class UserResult {
    
    public usrID: number;

    public usr_code: string;

    public usr_userName: string;

    public usr_password: string;

    public usr_fullName: string;

    public usr_documentT: string;

    public usr_numberDoc: string;

    public usr_email: string;

    public usr_companyID: string;

    public usr_type: string;

    public usr_role: string;

    public usr_creationU: string;

    public usr_creationDate: Date | moment.Moment;

    public usr_modificationUser: string;

    public usr_modificationDate: Date | moment.Moment;

    public usr_status: string;

}