import mongoose from 'mongoose';

interface ProductAttr {
  name: string;
  price: number;
  description: string;
  categoryName: string;
  imageUrl: string;
}

interface ProductDoc extends mongoose.Document {
  name: string;
  price: number;
  description: string;
  categoryName: string;
  imageUrl: string;
}

interface ProductModel extends mongoose.Model<ProductDoc> {
  build(attrs: ProductAttr): ProductDoc;
}

const productSchema = new mongoose.Schema(
  {
    name: String,
    price: Number,
    description: String,
    categoryName: String,
    imageUrl: String
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      }
    }
  }
);


productSchema.statics.build = (attrs: ProductAttr) => {
  return new Product(attrs);
};

const Product = mongoose.model<ProductDoc, ProductModel>('Product', productSchema);

export { Product };