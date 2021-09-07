// import { BaseOut } from '../../../../Commons/Classes/baseOut';

// export class GetIdentificationTypeOut extends BaseOut {
//   public IdentificationTypes: Array<IdentificationType>;
// }

// export class IdentificationType {
//   public IdTipodeIdentificacion: number;
//   public SCodigo: string;
//   public SDescripcion: string;
//   public ICodigoHomologable: number;
// }

import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetDocumentTypesOut extends BaseOut {
    DocumentTypesGc: DocumentTypesGc[];
}

export class DocumentTypesGc {
    Code: string;
    Value: string;
    minLength: number;
    maxLength: number;
    isNumeric: boolean;
}