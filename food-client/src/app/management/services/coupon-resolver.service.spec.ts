import { TestBed } from '@angular/core/testing';

import { CouponResolverService } from './coupon-resolver.service';

describe('CouponResolverService', () => {
  let service: CouponResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CouponResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
