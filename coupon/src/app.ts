import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { errorHandler } from './middlewares/error-handle';
import { getCouponsRouter } from './routes/coupons';
import { getCouponByIdRouter } from './routes/couponById';
import { getCouponByCode } from './routes/couponByCode';
import { createCouponRouter } from './routes/createCoupon';
import { updateCouponRouter } from './routes/updateCoupon';
import { deleteCouponRouter } from './routes/deleteCoupon';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false
}));

/** 
 Enable cors to allow development for angular
*/
app.use(cors({
  origin: '*'
}));

// Add Routes
app.use(getCouponsRouter);
app.use(getCouponByIdRouter);
app.use(getCouponByCode);
app.use(createCouponRouter);
app.use(updateCouponRouter);
app.use(deleteCouponRouter);

// Add Error Handling
app.use(errorHandler);

export { app };