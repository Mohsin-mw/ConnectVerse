import { Request, Response } from "express";

import User from "../Models/userSchema";
const fetch_Friend_Request = async (req: Request, res: Response) => {};

const send_Friend_Request = async (req: Request, res: Response) => {
	try {
		const { senderId, receiverId } = req.body;

		const sender = await User.findById(senderId);
		const receiver = await User.findById(receiverId);
		if (!sender || !receiver) {
			throw new Error("Sender or receiver does not exist.");
		}
		receiver.friends.push({ user: senderId, status: "pending" });
		await receiver.save();
	} catch (error) {
		return res.status(400).json({ error });
	}
};

const respond_To_Friend_Request = async (req: Request, res: Response) => {
	try {
		const { accepterId, requesterId } = req.body;
		const accepter = await User.findById(accepterId);
		const requester = await User.findById(requesterId);

		if (!accepter || !requester) {
			throw new Error("Accepter or requester does not exist.");
		}
		const status = req.body.status;
		const foundFriend = accepter.friends.find((friend) => friend.user === requesterId);
		if (!foundFriend) {
			return res.status(400).send("No Friend Found");
		}
		foundFriend.status = status;
		accepter.save();
	} catch (error) {
		return res.status(400).json({ error });
	}
};

const removeFriend = async (req: Request, res: Response) => {
	const { user1_Id, user2_Id } = req.body;
	const user1 = await User.findById(user1_Id);
	const user2 = await User.findById(user2_Id);
	if (!user1 || !user2) {
		throw new Error("User does not exist.");
	}

	user1.friends.filter((friend) => friend.user !== user2_Id);
	await user1.save();
	user2.friends.filter((friend) => friend.user !== user1_Id);
	await user2.save();
};

const fetchFriends = async (req: Request, res: Response) => {
	try {
		const { userId } = req.body;
		const user = await User.findById(userId);

		if (!user) {
			throw new Error("User does not exist.");
		}
		const friends = user.friends.map((el) => el.status === "accepted");
		return res.json(friends);
	} catch (error) {
		return res.status(400).json({ error });
	}
};

export { fetch_Friend_Request, send_Friend_Request, respond_To_Friend_Request, removeFriend, fetchFriends };
