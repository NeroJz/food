import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { errorHandler } from './middlewares/error-handle';
import { getCouponsRouter } from './routes/coupons';
import { getCouponByIdRouter } from './routes/couponById';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false
}));

// Add Routes
app.use(getCouponsRouter);
app.use(getCouponByIdRouter);

// Add Error Handling
app.use(errorHandler);

export { app };