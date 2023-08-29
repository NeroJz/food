import express, { Request, Response } from 'express';
import { body } from 'express-validator';

import { validateRequest } from '../middlewares/validate-request';
import { User } from '../models/user';
import { BadRequestError } from '../errors/bad-request-error';
import { PasswordUtil } from '../utils/password-util';

const router = express.Router();

router.post('/api/auth/signup',
  [
    body('email')
      .trim()
      .notEmpty()
      .isEmail()
      .withMessage('Email is required'),
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Name is required'),
    body('phonenumber')
      .trim()
      .notEmpty()
      .withMessage('Phone number is required'),
    body('password')
      .trim()
      .notEmpty()
      .withMessage('Password is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const {
      email,
      name,
      phonenumber,
      password
    } = req.body;

    const existUser = await User.findOne({ email });

    if (existUser) {
      throw new BadRequestError('Email in used!');
    }

    const hashedPassword = await PasswordUtil.encrypt(password);

    const user = User.build({
      email,
      name,
      phonenumber,
      password: hashedPassword
    });

    await user.save();

    res.send(user);
  }
);

export { router as signUpRouter };