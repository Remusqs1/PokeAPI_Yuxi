import { BaseIn } from "../../../../../Commons/Classes/baseIn"

export class ReassignRequestIn extends BaseIn {
    FilingNumber: string;
    NewAdviser: NewAdviser;
    OldAviserId: number;
    ReassignRequest: ReassignRequest;
}

export class NewAdviser {
    AdviserId: number;
    FullName: string;
    ContactEmail: string;
    NumeroIdentificacion: string;
    SCodigoSIIF: string;
    IdTipoFuerzaComercial: number;
    Domain: string;

}

// requestId*	number($double)
// adviserId*	number($double)

export class ReassignRequest {
    // public FilingNumber: string;
    // public AdviserId: number;

    public requestId: string;
    public adviserName: string;
    public adviserDocumentNumber: string;
    public company: string;

}
