import { Request, Response } from "express";
import User from "../Models/userSchema";

const fetch_Friend_Request = async (req: Request, res: Response) => {
  const loggedUser = req.user;
  if (!loggedUser) {
    return res.status(400).json({ error: "User not found (req.user)" });
  }

  try {
    const friendRequests = loggedUser.friends?.filter((e) => {
      return e.status === "pending";
    });

    if (friendRequests?.length === 0) {
      return res.json({ message: "You have no friend requests!!" });
    }

    return res.json({ friendRequests });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const send_Friend_Request = async (req: Request, res: Response) => {
  const user_to_send_req_ID: string = req.body;

  const loggedUser = req.user;
  if (!loggedUser) {
    return res.status(400).json({ error: "User not found (req.user)" });
  }

  try {
    //sending request to that user
    const user_To_Send_Request = await User.findById(user_to_send_req_ID);
    if (!user_To_Send_Request)
      return res.json({
        message: "User you trying to send friend request to doesn't exist.",
      });

    user_To_Send_Request.friends?.push({
      user: loggedUser._id,
      status: "pending",
    });

    await user_To_Send_Request.save();

    return res
      .status(200)
      .json({ message: `Friend request sent to ${user_To_Send_Request.name}` });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const respond_To_Friend_Request = async (req: Request, res: Response) => {
  const {
    status,
    respond_to_user_ID,
  }: { status: string; respond_to_user_ID: string } = req.body;

  const loggedUser = req.user;
  if (!loggedUser) {
    return res.status(400).json({ error: "User not found (req.user)" });
  }

  try {
    const requestedUser_friend_object = loggedUser.friends?.find((e) =>
      e.user.equals(respond_to_user_ID)
    );
    if (!requestedUser_friend_object) {
      return res.status(500).json({ error: "this friend req is not found" });
    }

    // Accepting request
    if (status === "accepted") {
      // adding that guy to friend in logged user
      requestedUser_friend_object.status = "accepted";

      // adding logged user to friend in that guy
      const sender = await User.findById(respond_to_user_ID);
      if (!sender) {
        return res
          .status(500)
          .json({ error: "request sender user not found in database" });
      }

      sender.friends?.push({
        user: loggedUser._id,
        status: "accepted",
      });
      await sender.save();
    }
    // when friend request is rejected
    else if (status === "rejected") {
      requestedUser_friend_object.status = "rejected";

      loggedUser.friends = loggedUser.friends?.filter(
        (e) => !e.user.equals(respond_to_user_ID)
      );
    }

    await loggedUser.save();
    return res.json({ message: `Friend request ${status}.` });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const removeFriend = async (req: Request, res: Response) => {
  const { friend_ID }: { friend_ID: string } = req.body;

  const loggedUser = req.user;
  if (!loggedUser) {
    return res.status(400).json({ error: "User not found (req.user)" });
  }

  try {
    // Removing friend from logged user
    loggedUser.friends = loggedUser.friends?.filter(
      (e) => !e.user.equals(friend_ID)
    );

    // Removing logged user as friend from that other guy
    const friend = await User.findById(friend_ID);
    if (!friend) {
      return res
        .status(500)
        .json({ error: "This friend is not found in database" });
    }

    friend.friends = friend.friends?.filter(
      (e) => !e.user.equals(loggedUser._id)
    );

    await loggedUser.save();
    await friend.save();
  } catch (error) {
    return res.status(400).json(error);
  }
};

const fetchFriends = async (req: Request, res: Response) => {
  const loggedUser = req.user;
  if (!loggedUser) {
    return res.status(400).json({ error: "User not found (req.user)" });
  }

  try {
    const friends = loggedUser.friends?.filter((e) => e.status === "accepted");
    if (!friends) {
      return res.json({ message: "You have no friends!!!! GET A LIFE" });
    }

    return res.json({ friends });
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
