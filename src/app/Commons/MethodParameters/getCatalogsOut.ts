
import { BaseOut } from '../Classes/baseOut';
import { Catalogs } from '../Entities/catalogs';

export class GetCatalogsOut extends BaseOut {

  public $type = 'DevOps.MethodParameters.GetCatalogsOut, DevOps.MethodParameters';
  public catalogs: Array<Catalogs>;
}
