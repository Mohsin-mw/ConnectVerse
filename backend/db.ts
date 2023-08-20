import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.URI) {
      throw new Error("Environment variable URI is not defined");
    }

    mongoose.connect(process.env.URI, {});

    console.log("Database connected");
  } catch (error) {
    console.error("MongoDB Atlas Connection Failed:", error);
  }
};

export default connectDB;
