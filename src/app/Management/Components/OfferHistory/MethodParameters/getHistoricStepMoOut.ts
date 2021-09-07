import { BaseOut } from '../../../../Commons/Classes/baseOut';
import { HistoricStep } from '../../../../Commons/Entities/historicStep';

export class GetHistoricStepMoOut extends BaseOut {

    public $type = 'SD.MethodParameters.MiddleOfficeEL.Management.GetHistoricStepMoOut, SD.MethodParameters';

    public historicSteps:Array<HistoricStep>;

}
