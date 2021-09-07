import * as moment from 'moment';

export class Role
{
      public rlID: number;

      public rl_code: string;

      public rl_name: string;

      public rl_creationUser: string;

      public rl_creationDate: Date | moment.Moment;
      
      public rl_modificationUser: string;
      
      public rl_modificationDate: Date | moment.Moment;
      
      public rl_status: string;

}