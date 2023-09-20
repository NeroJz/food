import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { errorHandler } from './middlewares/error-handle';
import { getProductsRouter } from './routes/products';
import { getProductByIdRouter } from './routes/productById';
import { createProductRouter } from './routes/create-product';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false
}));

/** 
 Enable cors to allow development for angular
*/
app.use(cors());

// Add Routes
app.use(getProductsRouter);
app.use(getProductByIdRouter);
app.use(createProductRouter);

// Add Error Handling
app.use(errorHandler);

export { app };