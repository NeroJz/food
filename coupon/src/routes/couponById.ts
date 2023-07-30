import express from 'express';

import { Coupon } from '../models/coupon';

const router = express.Router();

router.get('/api/coupon/:id', async (req, res) => {
  const { id } = req.params;
  const coupon = await Coupon.findById(id);

  if (!coupon) {
    throw new Error('Coupon not found');
  }

  res.send(coupon);
});

export { router as getCouponByIdRouter };