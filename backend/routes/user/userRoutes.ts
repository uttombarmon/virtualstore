import bcrypt from "bcryptjs";
import express, { Request, Response } from "express";
import User from "../../models/User";
import UserType from "../../types/UserType";
const routerUser = express.Router();

routerUser.get("/", async (req: Request, res: Response) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});
routerUser.post("/", async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    res.status(400).json({ message: "User already exists" });
  }
  if (!username || !email || !password) {
    res.status(400).json({ message: "Please fill all fields" });
  }
  if (password.length <= 8) {
    res.status(400).json({ message: "Password must be at least 8 characters" });
  }
  try {
    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      username,
      email,
      password: encryptedPassword,
    } as UserType);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    console.log(`Cretere User:`, error);
    res.status(500).json({ message: "Error creating user" });
  }
});

export default routerUser;
