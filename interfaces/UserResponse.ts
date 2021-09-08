import UserDto from '../dtos/user-dto';

export default class UserResponse {
  constructor(
    public accessToken: string,
    public refreshToken: string,
    public user: UserDto
  ) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.user = user;
  }
}
