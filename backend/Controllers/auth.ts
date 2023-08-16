import { Request, Response, NextFunction } from "express";

const signup = async (req: Request, res: Response) => {};

const signin = async (req: Request, res: Response) => {};

const authVerify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

const logout = async (req: Request, res: Response) => {};

export { signup, signin, authVerify, logout };
