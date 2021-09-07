import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetCommercialForcesOut extends BaseOut {
    public commercialForces: CommercialForce[];
}

export class CommercialForce {
    public idTipoFuerzaComercial: number;
    public SCodigo: string;
    public SDescripcion: string;
    public ICodigoHomologable: number;
    public BAplicaTasaFija: boolean;
    public BPermiteCambioOficina: boolean;
    public BFuerzaComercialConvenio: boolean;
    public ITasaFullComercio: number;
    public BAplicaTasaFullComercio: boolean;
}