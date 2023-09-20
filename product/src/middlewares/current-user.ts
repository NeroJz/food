import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface UserPayload {
  email: string;
  id: string;
  roles: string[];
}

declare global {
  namespace Express {
    export interface Request {
      currentUser: UserPayload
    }
  }
}

export const currentUser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {

  if (!req.session?.jwt) {
    return next();
  }

  try {
    const currentUser = jwt.verify(
      req.session.jwt,
      process.env.JWT_KEY!
    ) as UserPayload;
    req.currentUser = currentUser;
  } catch (err) { }

  next();
};