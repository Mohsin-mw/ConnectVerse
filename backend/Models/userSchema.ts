import mongoose, { Document, Schema, Types, model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  pic: string;

  friends: Array<{
    user: Types.ObjectId;
    status: "pending" | "accepted" | "rejected";
  }>;
}

const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  pic: { type: String, default: "a default pic link" },

  friends: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      status: {
        type: String,
        enum: ["pending", "accepted", "rejected"],
        default: "pending",
      },
    },
  ],
});

const User = model<IUser>("User", UserSchema);

export default User;
