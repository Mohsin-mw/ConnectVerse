import { Router } from "express";
import {
  fetchFriends,
  fetch_Friend_Request,
  removeFriend,
  respond_To_Friend_Request,
  send_Friend_Request,
} from "../Controllers/friend";

import { authVerify } from "../Controllers/auth";

const friendRouter = Router();

// Routes
friendRouter.post("/fetch_Friend_Request", authVerify, fetch_Friend_Request);

friendRouter.post("/send-friend-request", authVerify, send_Friend_Request);

friendRouter.post(
  "/respond-to-friend-request",
  authVerify,
  respond_To_Friend_Request
);

friendRouter.get("/fetchFriends", authVerify, fetchFriends);

friendRouter.post("/removeFriend", authVerify, removeFriend);

export default friendRouter;
