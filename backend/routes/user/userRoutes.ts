import bcrypt from "bcryptjs";
import express, { Request, Response } from "express";
import apiProtect from "../../middleware/apiProtected";
import User from "../../models/User";
import UserType from "../../types/UserType";
const routerUser = express.Router();

// user get api
routerUser.get("/", apiProtect, async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const users = await User.findOne({ email: email });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users" });
  }
});
// user create api
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

// user update api
routerUser.patch("/edit", apiProtect, async (req: Request, res: Response) => {
  const { id, data } = req.body;
  if (!data) {
    res.status(304).json({ result: "Not found any changes!" });
  }
  try {
    const result = await User.findById(id).updateOne(data);
    if (!result.acknowledged && result.modifiedCount! > 0) {
      res.status(304).json({ error: "Updated failed!" });
    }
    console.log(result);
    res.status(204).json({ result: result });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
});

export default routerUser;
