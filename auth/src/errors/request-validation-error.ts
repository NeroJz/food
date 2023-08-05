import { ValidationError } from 'express-validator';
import { CustomError } from './custom-error';

export class RequestValidationError extends CustomError {
  statuCode: number = 400;

  constructor(private errors: ValidationError[]) {
    super('Invalid request parameter');
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
  serialize(): { message: string; fields?: string | undefined; }[] {
    return this.errors.map(err => {
      if (err.type === 'field') {
        return { message: err.msg, field: err.path };
      }
      return { message: err.msg };
    });
  }
}