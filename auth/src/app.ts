import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import cors from 'cors';

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
app.get('/api/auth', (req, res) => {
  res.send('Auth is ready');
});


// Add Error Handling
app.use(errorHandler);

export { app };