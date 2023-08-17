import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");
require("dotenv").config();
const userdata = require("../Models/userSchema.ts");

const signup = async (req: Request, res: Response) => {
	try {
		const { username, email, password } = req.body;
		const userByName = await userdata.findOne({ username });
		if (userByName) return res.status(409).json({ error: "Username already exists" });

		const userByEmail = await userdata.findOne({ email });
		if (userByEmail) return res.status(409).json({ error: "email already exists" });

		const uploadData = await userdata.create({ username, email, password });
	} catch (err) {
		res.status(501).send("something went wrong");
	}
};

const signin = async (req: Request, res: Response) => {
	try {
		const { email, password } = req.body;
		const userInfo = await userdata.findOne({ email, password });
		if (!userInfo) res.status(401).send({ error: "invalid credentials" });

		const jwtToken = jwt.sign({ email, password }, process.env.JWT_SECRET_KEY, { expiresIn: "20d" });
		res.status(200).cookie("authtoken", jwtToken, { secure: true, httpOnly: true }).send({ message: "login succesfull" });
	} catch (err) {
		res.status(501).send("something went wrong");
	}
};

const authVerify = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const verifyJwt = await jwt.decode(req.cookies.authToken, process.env.JWT_SECRET_KEY);

		if (verifyJwt) {
			const checkUser = await userdata.findOne({ username: verifyJwt.username, password: verifyJwt.password });
			if (checkUser) {
				req.body = { ...req.body, email: verifyJwt.username, password: verifyJwt.password };
				next();
			} else {
				res.status(401).send("token expired");
			}
		} else {
			res.status(401).send("authentication failed login again");
		}
	} catch (err) {
		res.status(501).send("something went wrong");
	}
};

const logout = async (req: Request, res: Response) => {};

export { signup, signin, authVerify, logout };
