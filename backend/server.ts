import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();
import connectDB from "./db";

const app = express();
const port = 8000;

// ROUTER
import authRouter from "./Router/auth";
import friendRouter from "./Router/friends";
import { authVerify } from "./Controllers/auth";

// MIDDELWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: process.env.FRONTEND, credentials: true }));

// ROUTES
app.use("/auth", authRouter);
app.use("/friends", friendRouter);

// Starting Server
const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log("server has started on port", port);
  });
};

startServer();
