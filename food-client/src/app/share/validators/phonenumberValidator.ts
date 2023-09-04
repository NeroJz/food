import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';

export function phonenumberValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const matchedPattern = /^[0-9]+$/.test(value);
    const matchedLength = value.length >= 7 && value.length <= 10;

    return !matchedPattern
      ? { phoneValid: { message: 'Phone number is invalid' } }
      : !matchedLength
        ? { phoneLength: { message: 'Phone number must be between 7 and 10 in length' } }
        : null;
  }
}