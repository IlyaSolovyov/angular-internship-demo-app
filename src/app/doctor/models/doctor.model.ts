import { BaseModel } from 'src/app/shared/models/base.model';

export class Doctor extends BaseModel {
  firstName: string;
  lastName: string;
  successfulOperationsNumber: number;

  constructor(
    id: number,
    firstName: string,
    lastName: string,
    successfulOperationsNumber: number,
  ) {
    super(id);

    this.firstName = firstName;
    this.lastName = lastName;
    this.successfulOperationsNumber = successfulOperationsNumber;
  }
}
