import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class CreateUserIn extends BaseIn {

    public usr_userName: string;

    public usr_password: string;

    public usr_fullName: string;

    public usr_documentType: string;

    public usr_numberDocument: number;

    public usr_email: string;

    public usr_role: string;

    public usr_force: number;

}


export class CreateMultipleUserIn extends BaseIn {

    createMultipleUser: CreateUser[]
    totalToSubmit: number
}

export class CreateUser {
    public usr_userName: string;

    public usr_password: string;

    public usr_fullName: string;

    public usr_documentType: string;

    public usr_numberDocument: number;

    public usr_email: string;

    public usr_type: number;

    public usr_role: string;

    public usr_force: number;
}