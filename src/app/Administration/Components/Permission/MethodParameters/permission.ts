import * as moment from 'moment';

export class Permission
{
      public pmID: number;

      public pm_code: string;

      public pm_name: string;

      public pm_description: string;

      public pm_creationUser: string;

      public pm_creationDate: Date | moment.Moment;
      
      public pm_modificationUser: string;
      
      public pm_modificationDate: Date | moment.Moment;
      
      public pm_status: string;

}