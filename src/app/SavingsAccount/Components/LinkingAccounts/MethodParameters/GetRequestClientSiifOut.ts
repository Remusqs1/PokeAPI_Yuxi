import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetRequestClientSiifOut extends BaseOut {
  GetRequestClientSiif: Root;
}
export class Root extends BaseOut {
  xmlns: string;
  Pagina: string;
  Errores: Errores;
  InformacionCab: InformacionCabClientSiifOut;
  Repeticiones: string;
  Exitos: string;
}

// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
export class InformacionCabClientSiifOut {
  // TIPOID: string;
  // NUMERODEIDENTIFICACION: string;
  // NOMBREORAZONSOCIAL: string;
  // FECHAINGRESO: string;
  // SUCURSALORIGENOREGION: string;
  // DIRECCIONEMPRESA1: string;
  // BARRIOEMPRESA: string;
  // TELEFONOEMPRESA1: string;
  // TELEFONOEMPRESA2: string;
  // DIRECCIONDOMICILIO1: string;
  // BARRIODOMICILIO: string;
  // TELEFONODOMICILIO1: string;
  // TELEFONODOMICILIO2: string;
  // DIRECCIONNEGOCIO1: string;
  // DIRECCIONNEGOCIO2: string;
  // TELEFONONEGOCIO1: string;
  // TELEFONONEGOCIO2: string;
  // EMAILEMPRESA: string;
  // CODIGOCIUDADEMPRESA: string;
  // CIUDADEMPRESA: string;
  // EMAILDOMICILIO: string;
  // CODIGOCIUDADDOMICILIO: string;
  // CIUDADDOMICILIO: string;
  // EMAILNEGOCIO: string;
  // CODIGOCIUDADNEGOCIO: string;
  // CIUDADNEGOCIO: string;

  TipoId: string;
  NumerodeIdentificacion: string;
  NombreORazonSocial: string;
  FechaIngreso: string;
  SucursalOrigenoRegion: string;
  DireccionEmpresa1: string;
  BarrioEmpresa: string;
  TelefonoEmpresa1: string;
  TelefonoEmpresa2: string;
  DireccionDomicilio1: string;
  BarrioDomicilio: string;
  TelefonoDomicilio1: string;
  TelefonoDomicilio2: string;
  DireccionNegocio1: string;
  DireccionNegocio2: string;
  TelefonoNegocio1: string;
  TelefonoNegocio2: string;
  EmailEmpresa: string;
  CodigoCiudadEmpresa: string;
  CiudadEmpresa: string;
  EmailDomicilio: string;
  CodigoCiudadDomicilio: string;
  CiudadDomicilio: string;
  EmailNegocio: string;
  CodigoCiudadNegocio: string;
  CiudadNegocio: string;
}

export class ErrorRep {
  CodError: string;
  DesError: string;
}

export class Errores {
  ErrorRep: ErrorRep;
}
