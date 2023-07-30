import express from 'express';
import { Coupon } from '../models/coupon';

const router = express.Router();

router.get('/api/coupon', async (req, res) => {
  const coupons = await Coupon.find({});

  res.send(coupons);
});

export { router as getCouponsRouter };