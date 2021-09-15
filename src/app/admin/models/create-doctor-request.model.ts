export class CreateDoctorRequest {
  firstName: string;
  lastName: string;
  successfulOperations: number;

  constructor(
    firstName: string,
    lastName: string,
    successfulOperations: number,
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.successfulOperations = successfulOperations;
  }
}