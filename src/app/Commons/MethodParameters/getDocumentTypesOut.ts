
import * as moment from 'moment';
import { BaseOut } from '../Classes/baseOut';
import { DocumentType } from '../Entities/documentType';

export class GetDocumentTypesOut extends BaseOut {

  public $type = 'SD.MethodParameters.General.Common.GetDocumentTypesOut, SD.MethodParameters';

  public documentTypes: Array<DocumentType>;



}
