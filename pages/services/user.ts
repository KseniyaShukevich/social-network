import db from '../../models';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import mailService from '../services/mail';
import tokenService from '../services/token';
import UserDto from '../../dtos/user-dto';
import ITokens from '../../interfaces/ITokens';
import IUserResponse from '../../interfaces/IUserResponse';
import IUserRequest from '../../interfaces/IUserRequest';
import MessageResponse from '../../interfaces/IMessageResponse';
import IDataUser from '../../interfaces/IDataUser';

const generateUserData = async (data: IDataUser): Promise<IUserResponse> => {
  const userDto: UserDto = new UserDto(data);
  const tokens: ITokens = tokenService.generateTokens({ ...userDto });
  await tokenService.saveToken(userDto.id, tokens.refreshToken);

  return { ...tokens, user: userDto };
};

export default class UserService {
  static async registration(
    body: IUserRequest
  ): Promise<IUserResponse | MessageResponse> {
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
  ): Promise<IUserResponse | MessageResponse> {
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
}
