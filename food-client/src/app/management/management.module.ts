import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ShareModule } from '../share/share.module';

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
    ReactiveFormsModule,
    ShareModule,
    ManagementRoutingModule,
  ]
})
export class ManagementModule { }
