import mongoose from 'mongoose';

interface UserAttr {
  first: string;
  last: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttr): UserDoc;
}

interface UserDoc extends mongoose.Document {
  first: string;
  last: string;
}

const userSchema = new mongoose.Schema(
  {
    first: String,
    last: String,
  }
);

userSchema.statics.build = (attrs: UserAttr) => {
  return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };