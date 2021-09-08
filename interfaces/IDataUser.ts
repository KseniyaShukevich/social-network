import IUserRequest from './IUserRequest';

export default interface IDataUser extends IUserRequest {
  id: string;
  isActivated: false;
  activationLink: string;
  updateAt: string;
  createdAt: string;
}
