import { BaseOut } from '../../Commons/Classes/baseOut';

export class GetCatalogsOut extends BaseOut {
    listCatalogs: Catalogs[];
}
export class Catalogs {
    public ID: number;
    public Code: string;
    public Value: string;
}
export class CatalogsESP {
    public idEsp: number;
    public CodigoESP: string;
    public ESP: string;
    public Activo: boolean;
    public ValidacionNIEESP: boolean;
    public LongitudMinima: number;
    public LongitudMaxima: number;
    public TipoProdictoId: number;
    public TipoProceso: number;
    public ValorMinimo: string;
    public ValorMaximo: string;
}