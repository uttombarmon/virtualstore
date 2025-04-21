import JWT from "jsonwebtoken";
import bcrypt from "bcryptjs";
import User from "../../models/User";
import UserType from "../../types/UserType";
import { Request, Response } from "express";
import { Router } from "express";
import dotenv from "dotenv";
dotenv.config();
const routerAuth = Router();

routerAuth.post("/login", async (req: Request, res: Response): Promise<any> => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    if (user) {
      const typedUser: UserType = user;
      const isPasswordValid = await bcrypt.compare(
        password,
        typedUser.password
      );
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      const token = JWT.sign(
        { email: typedUser.email },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "1h",
        }
      );
      return res
        .status(200)
        .json({ token, user: { id: typedUser._id, email: typedUser.email } });
    }
    // This should ideally not be reached if the initial 'if (!user)' check works
    return res.status(500).json({ message: "Unexpected error during login" });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Server error" });
  }
});

export default routerAuth;
