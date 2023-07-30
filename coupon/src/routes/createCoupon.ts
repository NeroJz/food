import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';

import { Coupon } from '../models/coupon';

const router = express.Router();

router.post('/api/coupon',
  [
    body('couponCode')
      .notEmpty()
      .trim()
      .isLength({ min: 3 })
      .withMessage('Coupon Code is required and must be at least three characters'),
    body('discountAmount')
      .notEmpty()
      .trim()
      .isFloat({ gt: 0 })
      .withMessage('Discount amount is required')
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { couponCode, discountAmount, minAmount } = req.body;

    const coupon = Coupon.build({
      couponCode,
      discountAmount,
      minAmount: minAmount || 0
    });

    await coupon.save();

    res.send(coupon);
  }
);

export { router as createCouponRouter };