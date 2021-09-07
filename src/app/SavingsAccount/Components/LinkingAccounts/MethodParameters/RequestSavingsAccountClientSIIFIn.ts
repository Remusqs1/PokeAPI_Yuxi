import { BaseIn } from '../../../../Commons/Classes/baseIn';


export class RequestSavingsAccountClientSIIFIn extends BaseIn {

  InformacionCab: InformacionCabSavingAccountSiif;
  Repeticiones: RepeticionesSavingAccountSiif;
}

export class InformacionCabSavingAccountSiif {
  TipodeIdentificacion: string;
  NumerodeIdentificacion: string;
}

export class RepeticionesSavingAccountSiif {
  InformacionRep: string;
}