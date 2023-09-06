import express, { Request, Response } from 'express';
import { User } from '../models/user';

const router = express.Router();

router.get('/api/auth',
  async (req: Request, res: Response) => {
    let users = await User.find({});

    res.send(users);
  }
);

export { router as indexRouter };