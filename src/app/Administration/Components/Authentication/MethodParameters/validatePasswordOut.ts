
import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { User } from '../../../../Commons/Entities/user';

export class ValidatePasswordOut extends BaseOut {
  sessionId: string;
  user: User;
}
