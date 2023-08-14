import mongoose from 'mongoose';

interface UserAttr {
  username: string;
  email: string;
  password: string;
}

interface UserModel extends mongoose.Model<UserDoc> {
  build(attrs: UserAttr): UserDoc;
}

interface UserDoc extends mongoose.Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    password: String,
  }
);

userSchema.statics.build = (attrs: UserAttr) => {
  return new User(attrs);
}

const User = mongoose.model<UserDoc, UserModel>('User', userSchema);

export { User };