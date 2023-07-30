import mongoose from 'mongoose';

interface CouponAttr {
  couponCode: string;
  discountAmount: number;
  minAmount: number;
}

interface CouponModel extends mongoose.Model<CouponDoc> {
  build(attrs: CouponAttr): CouponDoc;
}

interface CouponDoc extends mongoose.Document {
  couponCode: string;
  discountAmount: number;
  minAmount: number;
}

const couponSchema = new mongoose.Schema(
  {
    couponCode: String,
    discountAmount: Number,
    minAmount: {
      default: 0.00,
      type: Number
    }
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

couponSchema.statics.build = (attrs: CouponAttr) => {
  return new Coupon(attrs);
};

const Coupon = mongoose.model<CouponDoc, CouponModel>('coupon', couponSchema);

export { Coupon };
