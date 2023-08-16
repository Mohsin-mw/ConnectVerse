import { Router } from "express";
import { authVerify, logout, signin, signup } from "../controllers/auth";

const authRouter = Router();

authRouter.post("/signup", signup);
authRouter.post("/signin", signin);
authRouter.post("/logout", authVerify, logout);

export default authRouter;
