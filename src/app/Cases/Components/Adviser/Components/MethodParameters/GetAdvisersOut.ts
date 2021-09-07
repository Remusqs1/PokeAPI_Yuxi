import { BaseOut } from "../../../../../Commons/Classes/baseOut";


export class GetAdvisersOut extends BaseOut {

    Advisers:Adviser[];

}


class Adviser {


    public idUser: string;
    public fullName: string;
    public userName: string;
    public domain: string;
    public notifByEmail?: boolean;
    public notifByMessenger?: boolean;
    public notifByCell?: boolean;
    public contactEmail: string;
    public offlineForms: boolean;
    public SNumeroIdentificacion: string;
    public SCodigoSIIF: string;
    public contactMessenger: string;
    public contactCell: string;
    public enabledForAssignation?: number;
    public idIDTipoFuerzaComercial?: number;
    public idIDOficina?: number;

}