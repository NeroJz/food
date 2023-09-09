import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import jwt from 'jsonwebtoken';

import { validateRequest } from '../middlewares/validate-request';
import { PasswordUtil } from '../utils/password-util';
import { User } from '../models/user';
import { NotFoundError } from '../errors/not-found-error';
import { BadRequestError } from '../errors/bad-request-error';
import { UserRole } from '../models/user-role';


const router = express.Router();

router.post('/api/auth/signin',
  [
    body('email')
      .trim()
      .notEmpty()
      .withMessage('Email is required'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password is required'),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      throw new NotFoundError();
    }

    const matchedPassword = await PasswordUtil.compare(user.password, password);

    if (!matchedPassword) {
      throw new BadRequestError('Incorrect password');
    }

    const userRole = await UserRole.find({ user })
      .populate('role');

    const token = jwt.sign(
      {
        email: user.email,
        id: user.id,
        roles: userRole?.map(user => user.role.name) || []
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: token
    }

    res.status(200).send(user);
  }
);

export { router as signInRouter };