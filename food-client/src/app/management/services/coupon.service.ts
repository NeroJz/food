import { Injectable } from '@angular/core';
import { Coupon } from '../interfaces/coupon';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CouponService {
  rootUrl: string = 'https://myprojects.dev/api/coupon';

  constructor(
    private http: HttpClient
  ) { }

  getCoupon(couponCode: string) { }

  getAllCoupon() {
    return this.http.get(this.rootUrl);
  }

  getCouponById(id: string) {
    return this.http.get<Coupon>(`${this.rootUrl}/${id}`);
  }

  createCoupon(coupon: Coupon) {
    return this.http.post(
      this.rootUrl,
      coupon);
  }

  updateCoupon(coupon: Coupon) { }

  deleteCoupon(id: string) { }
}
