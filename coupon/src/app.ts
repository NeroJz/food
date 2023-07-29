import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cookieSession({
  signed: false
}));

app.get('/api/coupon', (req, res) => {
  res.send('hello');
});


export { app };