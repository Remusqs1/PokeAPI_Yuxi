import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class ResetKeyOut extends BaseOut {
    public Code: string;
    public Description: string;
    public AuthorizationNumber: string;
    public AuthorizationDate: string;
    public AuthorizationHour: string;
}
