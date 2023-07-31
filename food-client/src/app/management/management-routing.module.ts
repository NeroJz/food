import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';

const routes: Routes = [
  {
    path: '',
    component: CouponIndexComponent
  },
  {
    path: 'coupon',
    component: CouponIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
