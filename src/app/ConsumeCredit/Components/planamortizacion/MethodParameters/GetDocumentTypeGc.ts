import { BaseOut } from '../../../../Commons/Classes/baseOut';

export class GetDocumentTypesOut extends BaseOut {
    DocumentTypesGc: DocumentTypesGc[];
}

export class DocumentTypesGc {
    Code: string;
    Value: string;
}