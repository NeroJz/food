import { Component } from '@angular/core';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-coupon-index',
  templateUrl: './coupon-index.component.html',
  styleUrls: ['./coupon-index.component.css']
})
export class CouponIndexComponent {
  constructor(
    private couponService: CouponService) { }

  ngOnInit() {
    this.couponService.getAllCoupon().subscribe(() => { });
  }
}
