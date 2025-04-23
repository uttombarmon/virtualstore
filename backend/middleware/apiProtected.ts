import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();
interface AuthRequest extends Request {
  user?: {
    userId: string;
    email: string;
    role?: string;
  };
}

const apiProtect = (req: Request, res: Response, next: NextFunction) => {
  const authheader = req.headers["authorization"];
  const token = authheader && authheader?.split(" ")[1];
  if (!token) {
    return res.status(502).json({ message: "Unauthorize access!" });
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Forbidden" });
    }
    (req as AuthRequest).user = user as AuthRequest["user"];
    return next();
    next();
  });
};

export default apiProtect;
