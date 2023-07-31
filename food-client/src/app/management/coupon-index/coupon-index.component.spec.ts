import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponIndexComponent } from './coupon-index.component';

describe('CouponIndexComponent', () => {
  let component: CouponIndexComponent;
  let fixture: ComponentFixture<CouponIndexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouponIndexComponent]
    });
    fixture = TestBed.createComponent(CouponIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
