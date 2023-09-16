import { CustomError } from './custom-error';

export class BadRequestError extends CustomError {
  statuCode: number = 400;

  constructor(message: string) {
    super(message);

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serialize() {
    return [{ message: this.message }];
  }

}