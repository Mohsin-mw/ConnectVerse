import { Request, Response } from "express";
import Server, { IServer } from "../Models/serverSchema";
import User from "../Models/userSchema";

const createServer = async (req: Request, res: Response) => {
  const { serverName, pic } = req.body;
  if (!serverName)
    return res.status(400).json({ error: "Server name can't be empty!" });

  const loggedUser = req.user;
  if (!loggedUser) return res.status(400).json({ error: "User not logged in" });

  //   Main logic starts here
  try {
    // creating new server
    const newServer = new Server({
      serverName,
      pic: pic || undefined,
      owner: loggedUser._id,
      members: loggedUser._id,
    });
    await newServer.save();

    // adding this server to Creator's database
    if (!loggedUser.server) loggedUser.server = [];

    loggedUser.server.push({ serverID: newServer._id, isOwner: true });
    await loggedUser.save();

    return res
      .status(200)
      .json({ message: "Server created.", newServer, loggedUser });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const fetchServer = async (req: Request, res: Response) => {
  const loggedUser = req.user;
  if (!loggedUser) return res.status(400).json({ error: "User not logged in" });

  try {
    const servers = await Server.find({ members: loggedUser._id });
    return res.status(200).json({ servers });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export { createServer, fetchServer };
