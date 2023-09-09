import express, { Request, Response } from 'express';
import { currentUser } from '../middlewares/current-user';
import { requiredAuth } from '../middlewares/required-auth';

const router = express.Router();

router.get('/api/auth/current-user',
  currentUser,
  (req: Request, res: Response) => {
    let user = req.currentUser;

    res.send(user);
  }
);

export { router as currentUserRouter };