import * as moment from 'moment';

export class Indicative {
    
    indID : number;
    project_name : string;
    cell_name : string;
    status : string;
    software_quality : number;
    requirement_quality : number;
    star_date : Date | moment.Moment;
    end_date : Date | moment.Moment;
    bug_channels : number;
    bug_integrations : number;
    bug_busSupport : number;
    bug_core : number;
    bug_data : number;
    bug : number;
    vulnerability : number;
    duplicated : number;
    automatic_cover : number;
    report_quality : number;
    bug_environment : number;
    ans : number;
    accomplish_develop : number;
    internal_ans : number;
    accomplishQA : number;
    user_crea : number;
    crea_date : Date | moment.Moment;
    user_mod : number;
    mod_date : Date | moment.Moment;
}
