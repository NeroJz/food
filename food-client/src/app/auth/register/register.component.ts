import { Component } from '@angular/core';

import { ROLE_ADMIN, ROLE_CUSTOMER } from '../common/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phonenumberValidator } from 'src/app/share/validators/phonenumberValidator';

interface RoleDropdownItem {
  label: string;
  value: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  roles: RoleDropdownItem[] = [
    {
      label: 'Admin',
      value: ROLE_ADMIN,
    },
    {
      label: 'Customer',
      value: ROLE_CUSTOMER,
    }
  ];

  formGroup: FormGroup;

  constructor() {
    this.formGroup = new FormGroup({
      email: new FormControl(
        '',
        [
          Validators.required,
          Validators.email
        ]
      ),
      name: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ),
      phonenumber: new FormControl(
        '',
        [
          Validators.required,
          // Validators.pattern('[0-9]{7,10}')
          phonenumberValidator()
        ]
      ),
      password: new FormControl(
        '',
        [
          Validators.required
        ]
      ),
      role: new FormControl(null)
    });
    this.formGroup.controls['role'].setValue('', { onlySelf: true });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }
    console.log(this.formGroup.value);
  }
}
