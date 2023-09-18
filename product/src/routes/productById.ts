import express, { Request, Response } from 'express';
import { Product } from '../models/product';
import { NotFoundError } from '../errors/not-found-error';

const router = express.Router();

router.get('/api/products/:id',
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      throw new NotFoundError();
    }

    res.send(product);
  }
);

export { router as getProductByIdRouter };