import { Component } from '@angular/core';
import { CouponService } from '../services/coupon.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-coupon-index',
  templateUrl: './coupon-index.component.html',
  styleUrls: ['./coupon-index.component.css']
})
export class CouponIndexComponent {
  coupons: Observable<any>;

  constructor(
    private couponService: CouponService) {
    this.coupons = this.couponService.getAllCoupon();
  }

  ngOnInit() {
  }
}
