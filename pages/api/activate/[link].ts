import type { NextApiRequest, NextApiResponse } from 'next';
import UserService from '../../../services/user';

export default async function activate(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const activationLink = req.query.link;
    await UserService.activate(activationLink as string);
    res.redirect('/');
  } catch (e) {
    console.log(e);
  }
}
