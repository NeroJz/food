import express, { Request, Response } from 'express';

import { Coupon } from '../models/coupon';
import { NotFoundError } from '../errors/not-found-error';

const router = express.Router();

router.delete('/api/coupon/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const coupon = await Coupon.findById(id);

    if (!coupon) {
      throw new NotFoundError();
    }

    await coupon.deleteOne();

    res.status(204).send(coupon);
  }
);

export { router as deleteCouponRouter };