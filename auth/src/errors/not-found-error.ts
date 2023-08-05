import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statuCode: number = 400;

  constructor() {
    super('Not found');
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serialize() {
    return [
      {
        message: 'Not found'
      }
    ];
  }
}