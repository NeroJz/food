import { Request, Response, NextFunction } from 'express';
import { UnauthorizedError } from '../errors/unauthorized-error';

export const checkScopes = (scopes: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
      throw new UnauthorizedError();
    }

    const foundScope = scopes.some(r => req.currentUser.roles!.includes(r));

    if (!foundScope) {
      throw new UnauthorizedError();
    }

    next();
  }
}