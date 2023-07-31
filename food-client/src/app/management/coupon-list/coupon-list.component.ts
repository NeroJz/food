import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.css']
})
export class CouponListComponent {
  coupons: Observable<any>;

  constructor(
    private couponService: CouponService) {
    this.coupons = this.couponService.getAllCoupon();
  }

  ngOnInit() {
  }
}
