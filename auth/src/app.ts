import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

import { signUpRouter } from './routes/signup';
import { signInRouter } from './routes/signin';
import { signoutRouter } from './routes/signout';
import { assignRoleRouter } from './routes/assign-role';
import { errorHandler } from './middlewares/error-handle';


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
app.use(signUpRouter);
app.use(signInRouter);
app.use(signoutRouter);
app.use(assignRoleRouter);

// Add Error Handling
app.use(errorHandler);

export { app };