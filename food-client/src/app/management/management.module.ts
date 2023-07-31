import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementRoutingModule } from './management-routing.module';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';
import { CouponCreateComponent } from './coupon-create/coupon-create.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';


@NgModule({
  declarations: [
    CouponIndexComponent,
    CouponCreateComponent,
    CouponListComponent
  ],
  imports: [
    CommonModule,
    ManagementRoutingModule
  ]
})
export class ManagementModule { }
