import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CouponIndexComponent } from './coupon-index/coupon-index.component';
import { CouponCreateComponent } from './coupon-create/coupon-create.component';
import { CouponListComponent } from './coupon-list/coupon-list.component';
import { CouponDeleteComponent } from './coupon-delete/coupon-delete.component';
import { CouponResolverService } from './services/coupon-resolver.service';

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
      },
      {
        path: ':id/delete',
        component: CouponDeleteComponent,
        resolve: {
          coupon: CouponResolverService
        }
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
