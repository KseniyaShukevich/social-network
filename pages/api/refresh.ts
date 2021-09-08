import type { NextApiRequest, NextApiResponse } from 'next';
import UserService from '../../services/user';
import cookie from 'cookie';

export default async function refresh(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === 'PUT') {
      const { refreshToken } = req.cookies;
      const userData: any = await UserService.refresh(refreshToken);

      res.setHeader(
        'Set-Cookie',
        cookie.serialize('refreshToken', userData.refreshToken, {
          httpOnly: true,
          maxAge: 30 * 24 * 60 * 60,
        })
      );

      return res.json(userData);
    } else {
      return res.status(405).json({ message: 'We only support PUT' });
    }
  } catch (e) {
    console.log(e);
  }
}
