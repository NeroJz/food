import { scrypt, randomBytes } from 'crypto';
import { promisify } from 'util';

const scryptAsync = promisify(scrypt);

export class PasswordUtil {
  static async encrypt(password: string) {
    const salt = randomBytes(8).toString('hex');
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;

    return `${buf.toString('hex')}.${salt}`;
  }

  static async decrypt(dbPassword: string, inPassword: string) {
    const [hashedPassword, salt] = dbPassword.split('.');
    const buf = (await scryptAsync(inPassword, salt, 64)) as Buffer;

    return hashedPassword === buf.toString('hex');
  }
}