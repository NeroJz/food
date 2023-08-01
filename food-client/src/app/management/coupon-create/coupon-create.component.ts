import { Component } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-coupon-create',
  templateUrl: './coupon-create.component.html',
  styleUrls: ['./coupon-create.component.css']
})
export class CouponCreateComponent {
  formGroup: FormGroup;

  constructor(private decimalPipe: DecimalPipe) {

    this.formGroup = new FormGroup({
      couponCode: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3)
        ]
      ),
      discountAmount: new FormControl(
        decimalPipe.transform(0, '1.2-2'),
        [
          Validators.required,
          Validators.min(1)
        ]
      ),
      minAmount: new FormControl(decimalPipe.transform(0, '1.2-2'))
    });
  }

  onSubmit() {
    if (this.formGroup.invalid) {
      return;
    }

    console.log(this.formGroup.value);
  }
}
