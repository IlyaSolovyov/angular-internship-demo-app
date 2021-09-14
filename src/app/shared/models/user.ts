import { BaseModel } from './base.model';

export class User extends BaseModel {
  userName: string;

  isAdmin: boolean;

  constructor(
    id: number,
    userName: string,
    isAdmin: boolean,
  ) {
    super(id);

    this.userName = userName;
    this.isAdmin = isAdmin;
  }
}
