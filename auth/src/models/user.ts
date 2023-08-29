import mongoose from 'mongoose';

interface UserAttr {
  email: string;
  name: string;
  phonenumber: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttr): UserDoc;
}

interface UserDoc extends mongoose.Document {
  email: string;
  name: string;
  phonenumber: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    email: String,
    name: String,
    phonenumber: String,
    password: String,
  }, {
  toJSON: {
    transform(_, ret) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      delete ret.password;
    }
  }
}
);

userSchema.statics.build = (attrs: UserAttr) => {
  return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User, UserDoc };