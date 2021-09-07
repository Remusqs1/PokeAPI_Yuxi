import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { CreateUserIn } from './createUserIn';

export class CreateUserOut extends BaseOut {


}

export class CreateMultipleUserOut extends BaseOut {

    totalUsersCreated: number;
    usersNotCreatedByRole: CreateUserIn[];
    usersNotCreatedByUserName: CreateUserIn[];
    usersNotCreatedByEmail: CreateUserIn[];
    usersNotCreatedByDocument: CreateUserIn[];
    message: string;
}