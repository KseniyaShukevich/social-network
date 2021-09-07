import db from '../../models';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from '../services/mail';
import tokenService from '../services/token';
import UserDto from '../../dtos/user-dto';
import ITokens from '../../interfaces/ITokens';
import IUserResponse from '../../interfaces/IUserResponse';
import IUserRequest from '../../interfaces/IUserRequest';

export default class UserService {
  static async registration(body: IUserRequest): Promise<IUserResponse> {
    const hashedPassword = await bcrypt.hash(body.password, 3);
    const activationLink: string = uuidv4();
    const user = await db.User.create({
      ...body,
      password: hashedPassword,
      activationLink,
    });
    await mailService.sendActivationMail(body.email, activationLink);
    const userDto: UserDto = new UserDto(user.dataValues);
    const tokens: ITokens = tokenService.generateTokens({ ...userDto });
    await tokenService.saveToken(userDto.id, tokens.refreshToken);

    return { ...tokens, user: userDto };
  }
}
