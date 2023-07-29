import express from 'express';

const app = express();

app.get('/api/coupon', (req, res) => {
  res.send('hello');
});


export { app };