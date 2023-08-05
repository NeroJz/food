import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { Coupon } from '../interfaces/coupon';
import { CouponService } from '../services/coupon.service';
import { ToastService } from 'src/app/share/toast/toast.service';

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
    private couponSvc: CouponService,
    private toastSvc: ToastService
  ) {
    this.coupon = route.snapshot.data['coupon'];
  }

  onDelete() {
    if (!this.coupon) return;
    const { id } = this.coupon;
    this.couponSvc.deleteCoupon(id)
      .subscribe(
        () => {
          this.toastSvc.show('Success', 'Coupon is deleted', 'bg-success text-light');
          this.router.navigateByUrl('management/coupon');
        },
        (err) => {
          this.toastSvc.show('Error', 'Failed to delete Coupon', 'bg-danger text-light');
        });
  }
}
