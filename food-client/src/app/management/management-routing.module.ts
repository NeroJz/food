import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';
import { CouponCreateComponent } from './coupon-create/coupon-create.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';

const routes: Routes = [
  {
    path: 'coupon',
    component: CouponIndexComponent,
    children: [
      {
        path: '',
        component: CouponListComponent
      },
      {
        path: 'create',
        component: CouponCreateComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'coupon',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
