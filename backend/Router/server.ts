import { Router } from "express";
import { authVerify } from "../Controllers/auth";

import {
  createChannel,
  createServer,
  fetchServer,
  fetchServerDetails,
} from "../Controllers/server";

const serverRouter = Router();

serverRouter.post("/create-server", authVerify, createServer);
serverRouter.get("/fetch-server", authVerify, fetchServer);

// CHANNEL
serverRouter.post("/create-channel", authVerify, createChannel);
serverRouter.get(
  "/fetch-server-details/:serverId",
  authVerify,
  fetchServerDetails
);

export default serverRouter;
