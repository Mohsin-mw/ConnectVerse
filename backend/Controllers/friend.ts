import { Request, Response } from "express";

const fetch_Friend_Request = async (req: Request, res: Response) => {};

const send_Friend_Request = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const respond_To_Friend_Request = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const removeFriend = async (req: Request, res: Response) => {};

const fetchFriends = async (req: Request, res: Response) => {
  try {
  } catch (error) {
    return res.status(400).json({ error });
  }
};

export {
  fetch_Friend_Request,
  send_Friend_Request,
  respond_To_Friend_Request,
  removeFriend,
  fetchFriends,
};
