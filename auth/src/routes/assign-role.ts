import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';

import { User } from '../models/user';
import { Role } from '../models/role';
import { NotFoundError } from '../errors/not-found-error';
import { UserRole } from '../models/user-role';
import { requiredAuth } from '../middlewares/required-auth';
import { currentUser } from '../middlewares/current-user';

const router = express.Router();

router.post('/api/auth/:userId/role',
  currentUser,
  requiredAuth,
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Role is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    const user = await User.findById(userId);

    if (!user) {
      throw new NotFoundError();
    }

    let userRole = UserRole.build();

    userRole.user = user;

    const { name } = req.body;
    const role = await Role.findOne({ name });

    if (!role) {
      const newRole = Role.build({ name });
      await newRole.save();
      userRole.role = newRole;
    } else {
      userRole.role = role;
    }

    await userRole.save();

    res.send(userRole);
  }
);

export { router as assignRoleRouter };