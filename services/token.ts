import jwt from 'jsonwebtoken';
import db from '../models';
import UserDto from '../dtos/user-dto';
import ITokens from '../interfaces/ITokens';

export default class tokenService {
  static generateTokens(payload: UserDto): ITokens {
    const accessToken: string = jwt.sign(
      payload,
      process.env.JWT_ACCESS_SECRET as string,
      { expiresIn: '30m' }
    );
    const refreshToken: string = jwt.sign(
      payload,
      process.env.JWT_REFRESH_SECRET as string,
      { expiresIn: '30d' }
    );

    return {
      accessToken,
      refreshToken,
    };
  }

  static async saveToken(
    idUser: string,
    refreshToken: string
  ): Promise<string> {
    const tokenData = await db.Token.findOne({
      where: {
        id: idUser,
      },
    });

    if (tokenData) {
      tokenData.setDataValue('refreshToken', refreshToken);
      return tokenData.save();
    }

    const token: any = await db.Token.create({ idUser, refreshToken });
    return token.dataValues.refreshToken;
  }

  static async removeToken(refreshToken: string): Promise<void> {
    await db.Token.destroy({
      where: {
        refreshToken,
      },
    });
  }
  
  static async validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_SECRET as string);
    } catch(e) {
      return null;
    }
  }

  static async validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_SECRET as string);
      
      return userData;
    } catch(e) {
      return null;
    }
  }

  static async findToken(refreshToken: string) {
    const tokenData = await db.Token.findOne({
      where: {
        refreshToken,
      },
    });

    return tokenData.dataValues;
  }
}
