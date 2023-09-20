import express, { Request, Response } from 'express';
import { Product } from '../models/product';
import { NotFoundError } from '../errors/not-found-error';
import { requiredAuth } from '../middlewares/required-auth';
import { checkScopes } from '../middlewares/check-scopes';

const router = express.Router();

router.delete('/api/products/:id',
  checkScopes(['ADMIN']),
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      throw new NotFoundError();
    }

    await product.deleteOne();

    res.status(200).send({
      id,
      message: 'Delete successfully'
    });
  }
);

export { router as deleteProductRouter };