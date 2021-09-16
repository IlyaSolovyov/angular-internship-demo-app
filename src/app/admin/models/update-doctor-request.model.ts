import { BaseModel } from 'src/app/shared/models/base.model';

export class UpdateDoctorRequest extends BaseModel {
  firstName: string;
  lastName: string;
  successfulOperations: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    successfulOperations: number,
  ) {
    super(id);
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.successfulOperations = successfulOperations;
  }
}