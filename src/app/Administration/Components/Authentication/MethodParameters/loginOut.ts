
import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { User } from '../../../../Commons/Entities/user';

export class LogingOut extends BaseOut {
  sessionId: string;
  user: User;
}
