import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { Coupon } from '../interfaces/coupon';
import { CouponService } from '../services/coupon.service';

@Component({
  selector: 'app-coupon-delete',
  templateUrl: './coupon-delete.component.html',
  styleUrls: ['./coupon-delete.component.css']
})
export class CouponDeleteComponent {
  coupon?: Coupon;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private couponSvc: CouponService
  ) {
    this.coupon = route.snapshot.data['coupon'];
  }

  onDelete() {
    if (!this.coupon) return;

    const { id } = this.coupon;
    this.couponSvc.deleteCoupon(id)
      .subscribe(() => {
        this.router.navigateByUrl('management/coupon');
      });
  }
}
