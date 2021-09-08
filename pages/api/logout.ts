import type { NextApiRequest, NextApiResponse } from 'next';
import UserService from '../../services/user';
import cookie from 'cookie';

export default async function signUpUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'POST') {
      const { refreshToken } = req.cookies;
      await UserService.logout(refreshToken);

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('refreshToken', '', {
          httpOnly: true,
          maxAge: -1,
        })
      );

      return res.json({message: 'Successful logout'});
    } else {
      return res.status(405).json({ message: 'We only support POST' });
    }
  } catch (e) {
    console.log(e);
  }
}
