import UserDto from "../dtos/user-dto";

export default interface IUserResponse {
  accessToken: string;
  refreshToken: string;
  user: UserDto;
}
