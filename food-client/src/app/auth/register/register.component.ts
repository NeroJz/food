import { Component } from '@angular/core';

import { ROLE_ADMIN, ROLE_CUSTOMER } from '../common/constants';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { phonenumberValidator } from 'src/app/share/validators/phonenumberValidator';
import { AuthService, RegisterDto } from 'src/app/share/services/auth.service';
import { Observable, tap } from 'rxjs';

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

  constructor(
    private authSrv: AuthService
  ) {
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

    const registDto = this.formGroup.value as RegisterDto;
    registDto.role = registDto.role || ROLE_CUSTOMER;

    // this.handleSignup(registDto)
    //   .pipe(
    //     tap(val => console.log(val))
    //   )
    //   .subscribe();
  }

  handleSignup(registerDto: RegisterDto): Observable<any> {
    return new Observable((observer) => {
      return this.authSrv.signup(registerDto).subscribe(
        (data) => observer.next(data),
        (err) => observer.error(err),
        () => console.log('Signup Complete')
      );
    });
  }

  handleRoleAssign(id: string, role: string) {
    return new Observable((observer) => {
      return this.authSrv.assignRole(id, role)
        .subscribe(
          (res) => observer.next(res),
          (err) => observer.error(err),
          () => console.log('Assign Role complete')
        );
    });
  }
}
