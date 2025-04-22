import { Schema, model } from "mongoose";
import UserType from "../types/UserType";
const userSchema = new Schema<UserType>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
      orders:{
        type: [String],
        default: [],
      },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const User = model<UserType>("User", userSchema);
export default User;
