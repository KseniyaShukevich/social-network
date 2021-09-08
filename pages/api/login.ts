import type { NextApiRequest, NextApiResponse } from 'next';
import UserService from '../../services/user';
import cookie from 'cookie';
import IUserResponse from '../../interfaces/IUserResponse';
import MessageResponse from '../../interfaces/IMessageResponse';

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { email, password } = req.body;
      const userData: IUserResponse | MessageResponse = await UserService.login(
        email,
        password
      );

      if (userData instanceof MessageResponse) {
        return res.status(userData.status).json({ message: userData.message });
      }
      res.setHeader(
        'Set-Cookie',
        cookie.serialize('refreshToken', userData.refreshToken, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60,
        })
      );
      return res.json(userData);
    } else {
      return res.status(405).json({ message: 'We only support POST' });
    }
  } catch (e) {
    console.log(e);
  }
}
