import type { NextApiRequest, NextApiResponse } from 'next';
import db from '../../models';
import { users } from '../../seeders/users';

export default function signUpUser(req: NextApiRequest, res: NextApiResponse) {
  users.map((user) => {
    db.User.create(user);
  });
  res.status(200).json('YES');
}
