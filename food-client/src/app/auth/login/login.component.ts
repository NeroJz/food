import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, CurrentUser, LoginDto } from 'src/app/share/services/auth.service';
import { ToastService } from 'src/app/share/toast/toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formGroup: FormGroup = new FormGroup({
    email: new FormControl(
      '',
      [
        Validators.required,
        Validators.email
      ]
    ),
    password: new FormControl(
      '',
      [
        Validators.required
      ]
    )
  });

  constructor(
    private authSrv: AuthService,
    private toastSvc: ToastService,
    private router: Router
  ) { }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    const loginDto = this.formGroup.value as LoginDto;

    this.authSrv.signin(loginDto)
      .subscribe(
        (user: CurrentUser) => {
          this.toastSvc.show('Success', `Welcome back! ${user.email}`, 'bg-success text-light');
          this.router.navigateByUrl('/');
        },
        (err) => {
          this.toastSvc.show('Error', 'Failed to login', 'bg-danger text-light');
        },
        () => {
          this.formGroup.reset();
        }
      );
  }
}
