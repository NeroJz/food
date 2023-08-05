import { app } from './app';
import mongoose from 'mongoose';

const start = async () => {
  // if (!process.env.MONGO_URI) {
  //   throw new Error('MONGO_URI must defined');
  // }

  try {
    // await mongoose.connect(process.env.MONGO_URI!);
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on Port', 3000);
  });
}

start();