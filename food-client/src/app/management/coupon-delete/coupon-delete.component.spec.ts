import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponDeleteComponent } from './coupon-delete.component';

describe('CouponDeleteComponent', () => {
  let component: CouponDeleteComponent;
  let fixture: ComponentFixture<CouponDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponDeleteComponent]
    });
    fixture = TestBed.createComponent(CouponDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
