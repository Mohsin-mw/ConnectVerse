import { Document, Schema, model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  pic: string;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: { type: String, default: "a default pic link" },
});

const User = model<IUser>("User", UserSchema);

export default User;
