export abstract class CustomError extends Error {
  abstract statuCode: number;
  abstract serialize(): { message: string, fields?: string }[];

  constructor(msg: string) {
    super(msg);

    Object.setPrototypeOf(this, CustomError.prototype);
  }
}