import { BaseIn } from '../../../../Commons/Classes/baseIn';
import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class CreateHomeConfigIn extends BaseIn {
    public Id: number;
    public OptionMenu: string;
    public Path: string;
    public OrderOption: number;
    public UserId: number;
    public ModificationDate: Date;
    public Icon: string;
    public StateConfig: boolean;
    
}