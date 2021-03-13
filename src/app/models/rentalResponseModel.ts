import { ResponseModel } from './responseModel';
import { Rental } from './rental';

export interface RentResponseModel extends ResponseModel {
  data: Rental[];
}
