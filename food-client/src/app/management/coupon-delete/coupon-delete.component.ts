import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { pluck, switchMap, tap } from 'rxjs/operators';
import { Coupon } from '../interfaces/coupon';

@Component({
  selector: 'app-coupon-delete',
  templateUrl: './coupon-delete.component.html',
  styleUrls: ['./coupon-delete.component.css']
})
export class CouponDeleteComponent {
  coupon?: Coupon;

  constructor(private route: ActivatedRoute) {
    this.coupon = route.snapshot.data['coupon'];
    console.log(this.coupon);
  }
}
