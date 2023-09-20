import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { Product } from '../models/product';
import { validateRequest } from '../middlewares/validate-request';

const router = express.Router();

router.post('/api/products',
  [
    body('name')
      .trim()
      .notEmpty()
      .withMessage('Product name is required')
    , body('price')
      .trim()
      .notEmpty()
      .isFloat({ gt: 0.00 })
      .withMessage('Price is required and must be greater than 0.00')
    , body('description')
      .trim()
    , body('categoryName')
      .trim()
      .notEmpty()
      .withMessage('Category name is required')
    , body('imageUrl')
      .default('https://placehold.co/601x401')
      .trim()
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { body } = req;

    const product = await Product.build(body);
    await product.save();

    res.status(201).send(product);
  }
);

export { router as createProductRouter };