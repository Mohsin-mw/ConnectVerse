import { Router } from "express";
import { authVerify } from "../Controllers/auth";

import { createServer, fetchServer } from "../Controllers/server";

const serverRouter = Router();

serverRouter.post("/create-server", authVerify, createServer);
serverRouter.get("/fetch-server", authVerify, fetchServer);

export default serverRouter;
