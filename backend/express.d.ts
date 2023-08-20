import * as express from "express";
import { IUser } from "./Models/userSchema";
declare global {
  namespace Express {
    interface Request {
      user?: IUser;
    }
  }
}
