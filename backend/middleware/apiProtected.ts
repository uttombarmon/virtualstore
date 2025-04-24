import dotenv from "dotenv";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

dotenv.config();

const apiProtect = (req: Request, res: Response, next: NextFunction) => {
  const authheader = req.headers["authorization"];
  const token = authheader && authheader?.split(" ")[1];
  if (!token) {
    res
      .status(502)
      .json({ message: "Unauthorize access!", authHead: authheader });
    return;
  }
  jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
    if (err) {
      console.log(err);
      res.status(403).json({ message: "Forbidden" });
      return;
    }
    next();
  });
};

export default apiProtect;
