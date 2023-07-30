import express from 'express';

import { Coupon } from '../models/coupon';
import { NotFoundError } from '../errors/not-found-error';

const router = express.Router();

router.get('/api/coupon/code/:code', async (req, res) => {
  const { code } = req.params;
  const coupon = await Coupon.find({ couponCode: code });

  if (coupon.length === 0) {
    throw new NotFoundError();
  }

  res.send(coupon);
});

export { router as getCouponByCode };