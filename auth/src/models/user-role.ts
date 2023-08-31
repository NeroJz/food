import mongoose from 'mongoose';
import { RoleDoc } from './role';
import { UserDoc } from './user';

interface UserRoleAttr {
  user: UserDoc;
  role: RoleDoc;
}

interface UserRoleDoc extends mongoose.Document {
  user: UserDoc;
  role: RoleDoc;
}

interface UserRoleModel extends mongoose.Model<UserRoleDoc> {
  build(attr?: UserRoleAttr): UserRoleDoc;
}

const userRoleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }
}, {
  toJSON: {
    transform(doc, ret) {
      ret.id = ret._id;
      const user = ret.user.name;
      const role = ret.role.name;
      delete ret._id;
      delete ret.user;
      delete ret.role;

      ret.user = user;
      ret.role = role;
    }
  }
});

userRoleSchema.statics.build = (attrs?: UserRoleAttr) => {
  return new UserRole(attrs);
};

const UserRole = mongoose.model<UserRoleDoc, UserRoleModel>('UserRole', userRoleSchema);

export { UserRole };