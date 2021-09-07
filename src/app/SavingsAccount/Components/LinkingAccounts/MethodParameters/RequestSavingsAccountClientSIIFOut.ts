import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class RequestSavingsAccountClientSIIFOut extends BaseOut {
  RequestSavingsAccountClientSIIF: DataSavingAccountsSiifOut;
}

export class AccountByClient {
  Id: number;
  AccountNumber: string;
  EstadoCliente: boolean;
  Compañia: string;
  Vigencia: string;
  Saldo: number;
}



export class InformacionCabAccountsSiifOut {
  TipodeIdentificacion: string;
  NumerodeIdentificacion: string;
  Nombre1: string;
  Nombre2: string;
  Apellido1: string;
  Apellido2: string;
  CodigodeTransaccion: string;
}

export class InformacionRepAccountsSiifOut {
  NumerodeCuenta: string;
}

export class RepeticionesAccountsSiifOut {
  InformacionRep: Array<InformacionRepAccountsSiifOut>;
}

export class DataSavingAccountsSiifOut {
  xmlns: object;
  Pagina: string;
  Errores: ErroresAccountsSiifOut;
  InformacionCab: InformacionCabAccountsSiifOut;
  Repeticiones: RepeticionesAccountsSiifOut;
  Exitos: object;
}

export class ErrorRepAccountsSiifOut {
  CodError: string;
  DesError: string;
}

export class ErroresAccountsSiifOut {
  ErrorRep: ErrorRepAccountsSiifOut;
}