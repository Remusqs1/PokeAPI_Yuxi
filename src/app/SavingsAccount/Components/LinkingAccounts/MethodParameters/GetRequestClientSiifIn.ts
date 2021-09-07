import { BaseIn } from '../../../../Commons/Classes/baseIn';

export class GetRequestClientSiifIn extends BaseIn {
  InformacionCab: InformacionCab;
  Repeticiones: Repeticiones;
}

export class InformacionCab {
  NUMERODEIDENTIFICACION: string;
}

export class Repeticiones {
  InformacionRep: string ;
}

// Root myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse);
