export default class UserDto {
  public id!: string;
  public email!: string;
  public isActivated!: boolean;

  constructor(model: any) {
    this.id = model.id;
    this.email = model.email;
    this.isActivated = model.isActivated;
  }
}
