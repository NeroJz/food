import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validate-request';

import { Coupon } from '../models/coupon';
import { NotFoundError } from '../errors/not-found-error';

const router = express.Router();

router.put('/api/coupon/:id',
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
    const { id } = req.params;
    const coupon = await Coupon.findById(id);

    if (!coupon) {
      throw new NotFoundError();
    }

    const { couponCode, discountAmount, minAmount } = req.body;

    coupon.set({
      couponCode,
      discountAmount,
      minAmount: minAmount || 0
    });

    await coupon.save();

    res.status(200).send(coupon);
  }
);

export { router as updateCouponRouter };