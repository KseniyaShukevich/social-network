import db from '../models';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from './mail';
import tokenService from './token';
import UserDto from '../dtos/user-dto';
import ITokens from '../interfaces/ITokens';
import UserResponse from '../interfaces/UserResponse';
import IUserRequest from '../interfaces/IUserRequest';
import MessageResponse from '../interfaces/MessageResponse';
import IDataUser from '../interfaces/IDataUser';
import jwt from 'jsonwebtoken';

const generateUserData = async (data: IDataUser): Promise<UserResponse> => {
  const userDto: UserDto = new UserDto(data);
  const tokens: ITokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);

  return new UserResponse(tokens.accessToken, tokens.refreshToken, userDto);
};

export default class UserService {
  static async registration(
    body: IUserRequest
  ): Promise<UserResponse | MessageResponse> {
    const userData = await db.User.findOne({
      where: {
        email: body.email,
      },
    });

    if (userData) {
      return new MessageResponse(401, 'This user already registred');
    }

    const hashedPassword = await bcrypt.hash(body.password, 3);
    const activationLink: string = uuidv4();
    const user = await db.User.create({
      ...body,
      password: hashedPassword,
      activationLink,
    });
    const link = `${process.env.API_URL}/api/activate/${activationLink}`;
    await mailService.sendActivationMail(body.email, link);

    return await generateUserData(user.dataValues);
  }

  static async activate(activationLink: string) {
    const user = await db.User.findOne({
      where: {
        activationLink,
      },
    });

    if (!user) {
      throw new Error('Incorrect activation link');
    }

    user.setDataValue('isActivated', true);
    await user.save();
  }

  static async login(
    email: string,
    password: string
  ): Promise<UserResponse | MessageResponse> {
    const user = await db.User.findOne({
      where: {
        email,
      },
    });

    if (!user) {
      return new MessageResponse(401, 'This user is not registred');
    }

    const isPasswordsEquals = await bcrypt.compare(
      password,
      user.dataValues.password
    );

    if (!isPasswordsEquals) {
      return new MessageResponse(401, 'Password is not correct');
    }

    return await generateUserData(user.dataValues);
  }

  static async logout(refreshToken: string): Promise<void> {
    await tokenService.removeToken(refreshToken);
  }

  static async refresh(refreshToken: string) {
    if (!refreshToken) {
      return new MessageResponse(401, 'No refresh token');
    }

    const userData: any = tokenService.validateRefreshToken(refreshToken);
    const tokenFromDB = tokenService.findToken(refreshToken);

    if (!userData || !tokenFromDB) {
      return new MessageResponse(401, 'This user is not logged in');
    }

    const user = await db.User.findOne({
      where: {
        id: userData.id,
      },
    });

    return await generateUserData(user.dataValues);
  }
}
