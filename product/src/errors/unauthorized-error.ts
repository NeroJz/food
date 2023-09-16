import { CustomError } from './custom-error';

export class UnauthorizedError extends CustomError {
  statuCode: number = 401;

  constructor() {
    super('Unauthorized');

    Object.setPrototypeOf(this, UnauthorizedError.prototype);
  }

  serialize(): { message: string; fields?: string | undefined; }[] {
    return [{
      message: 'User not authorized to perform action'
    }];
  }

}