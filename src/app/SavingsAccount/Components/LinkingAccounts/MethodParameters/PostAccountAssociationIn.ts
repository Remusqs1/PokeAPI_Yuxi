import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class PostAccountAssociationIn extends BaseIn {
  public UsrId: string;
  public UsrPassword: string;
  public TipoCuenta: string;
  public NumeroCuenta: string;
  public TipoIdentificacion: string;
  public NumeroIdentificacion: string;
  public NombresTarjetaHabiente: string;
  public ApellidosTarjetaHabiente: string;
  public NombreCorto: string;
  public CuentaPrincipal: string;
  public CodigoSubtipo: string;
  public Direccion: string;
  public CodigoDepartamento: string;
  public IndicativoCiudad: string;
  public Telefono: string;
  public Email: string;
  public ActividadEconomica: string;
  public OrigenIngresos: string;
  public CodigoOficina: string;
  public CodigoMunicipio: string;
}
