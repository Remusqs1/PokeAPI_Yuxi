
import { Serializable } from '../Classes/serializable';
import { Profile } from './profile';
import { DocumentType } from './documentType';
import * as moment from 'moment';
import { Company } from './company';

export class User extends Serializable {

  public usrID: number;

  public usr_code: string;

  public usr_userName: string;

  public usr_password: string;

  public usr_fullName: string;

  public usr_documentType: string;

  public usr_numberDocument: string;

  public usr_email: string;

  public usr_companyID: number;

  public usr_type: number;

  public usr_role: string;

  public usr_creationUser: string;

  public usr_creationDate: Date;

  public usr_modificationUser: string;

  public usr_modificationDate: Date;

  public usr_status: string;

  public usr_avatar: string;

  public FirstLogin: boolean;

}
