import type { NextApiRequest, NextApiResponse } from 'next';
import UserService from '../services/user';
import db from '../../models';
import cookie from 'cookie';
import IUserResponse from '../../interfaces/IUserResponse';

export default async function signUpUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const userData = await db.User.findOne({
        where: {
          email: req.body.email,
        },
      });

      if (userData) {
        return res.status(401).json({ message: 'This user already registred' });
      } else {
        const userData: IUserResponse = await UserService.registration(req.body);
        res.setHeader(
          'Set-Cookie',
          cookie.serialize('refreshToken', userData.refreshToken, {
            httpOnly: true,
            maxAge: 30 * 24 * 60 * 60,
          })
        );
        return res.json(userData);
      }
    } else {
      return res.status(405).json({ message: 'We only support POST' });
    }
  } catch (e) {
    console.log(e);
  }
}
