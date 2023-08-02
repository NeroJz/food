import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { Coupon } from '../interfaces/coupon';
import { CouponService } from '../services/coupon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrls: ['./coupon-create.component.css']
})
export class CouponCreateComponent {
  formGroup: FormGroup;

  constructor(
    private couponSvc: CouponService,
    private router: Router,
    private decimalPipe: DecimalPipe
  ) {

    this.formGroup = new FormGroup({
      couponCode: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ),
      discountAmount: new FormControl(
        decimalPipe.transform(null, '1.2-2'),
        [
          Validators.required,
          Validators.min(1)
        ]
      ),
      minAmount: new FormControl(decimalPipe.transform(null, '1.2-2'))
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    let couponDTO = this.formGroup.value as Coupon;
    return this.couponSvc.createCoupon(couponDTO)
      .subscribe(
        () => {
          this.router.navigateByUrl('/management/coupon');
        },
        (err) => {

        }
      );
  }
}
