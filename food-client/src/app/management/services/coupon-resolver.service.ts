import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Coupon } from '../interfaces/coupon';
import { CouponService } from './coupon.service';

@Injectable({
  providedIn: 'root'
})
export class CouponResolverService implements Resolve<Coupon> {

  constructor(
    private couponSvc: CouponService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const { id } = route.params;

    return this.couponSvc.getCouponById(id);
  }
}
