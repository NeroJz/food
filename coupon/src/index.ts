import { app } from './app';
import mongoose from 'mongoose';
import { Coupon } from './models/coupon';

const migration = async () => {

  await Coupon.deleteMany({});

  let seeds = [
    {
      couponCode: '10OFF',
      discountAmount: 10.00,
      minAmount: 20.00,
    },
    {
      couponCode: '20OFF',
      discountAmount: 20.00,
      minAmount: 40.00,
    },
  ];

  Coupon.insertMany(seeds);
}

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must defined');
  }

  try {
    await mongoose.connect(process.env.MONGO_URI!);

    await migration();
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on Port', 3000);
  });
}

start();