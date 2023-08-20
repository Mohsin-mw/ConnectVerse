import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import User, { IUser } from "../Models/userSchema";

const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Fields can't be empty!" });
    }

    // Checking if email already exist
    const emailExist = await User.findOne({ email });
    if (emailExist) {
      return res.status(400).json({ error: "Email already exist" });
    }

    //Registering user here
    const newUser: IUser = new User({ name, email, password });
    await newUser.save();

    return res.status(200).json({ message: "Signup successfull", newUser });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const signin = async (req: Request, res: Response) => {
  console.log("in signin");
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Fields can't be empty!" });
    }

    // Checking User Credentials----------------
    // checking email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }
    // Verifying Password
    if (user.password !== password) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    // If user credentials are correct
    const token = jwt.sign(
      { userID: user._id },
      process.env.SECRET_KEY as string
    );

    // Setting the cookie
    res.cookie("token", token, { httpOnly: true });

    return res.status(200).json({ message: "Signin Successfull", user, token });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const authVerify = async (req: Request, res: Response, next: NextFunction) => {
  // console.log("in authVerify");

  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ error: "No token!" });
    }

    const verify = jwt.verify(
      token,
      process.env.SECRET_KEY as string
    ) as JwtPayload;

    // console.log(verify);

    if (verify === undefined) {
      return res.status(400).json({ error: "invalid token!" });
    }

    const user = await User.findOne({ _id: verify.userID }).select("-password");
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    req.user = user;
    // res.status(200).json({ user: user });
    // console.log(user);
    next();
  } catch (error) {
    return res.status(400).json({ error });
  }
};

const logout = async (req: Request, res: Response) => {};

export { signup, signin, authVerify, logout };
