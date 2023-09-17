import { app } from './app';
import mongoose from 'mongoose';
import { Product } from './models/product';
import fs from 'fs';


const seeds = async () => {
  await Product.deleteMany({});

  const source = fs.readFileSync(__dirname + '/seeds/products.json');
  const data = JSON.parse(source.toString('utf8'));

  await Product.insertMany(data);

  let products = (await Product.find({})).length;
  console.log(`Total Product seeded: ${products}`);
};

const start = async () => {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI must defined');
  }

  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must defined');
  }

  try {
    mongoose.connection.on('connected', async () => {
      await seeds();
    });

    await mongoose.connect(process.env.MONGO_URI!);

  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on Port', 3000);
  });
}

start();