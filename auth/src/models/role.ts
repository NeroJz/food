import mongoose from 'mongoose';

interface RoleAttr {
  name: string;
}

interface RoleDoc extends mongoose.Document {
  name: string;
}

interface RoleModel extends mongoose.Model<RoleDoc> {
  build(attrs: RoleAttr): RoleDoc;
}

const roleSchema = new mongoose.Schema(
  {
    name: String
  }
);

roleSchema.statics.build = (attrs: RoleAttr) => {
  return new Role(attrs);
}

const Role = mongoose.model<RoleDoc, RoleModel>('Role', roleSchema);

export { Role, RoleDoc };