import mongoose, { Schema, Types, model } from "mongoose";

export interface IServer extends Document {
  serverName: string;
  pic: string;
  owner: Types.ObjectId;

  members?: Types.ObjectId;

  channels?: Array<{ channelName: string }>;
}

const serverSchema = new Schema<IServer>({
  serverName: { type: String, required: true },
  pic: {
    type: String,
    default:
      "https://img.freepik.com/free-photo/handmade-halloween-bat-middle_23-2147908116.jpg?w=740&t=st=1692612590~exp=1692613190~hmac=f5bfa270667b1571b7fd71c81b0116b66dbc340bf1e9bac9dda7c0240185b7ac",
  },

  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],

  channels: [
    {
      channelName: { type: String },
    },
  ],
});

const Server = model<IServer>("Server", serverSchema);

export default Server;
