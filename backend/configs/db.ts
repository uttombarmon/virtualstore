import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

const mongodbUri = process.env.MONGODB_URI!;

if (!mongodbUri) {
  throw new Error("Please provide a MongoDB URI");
}

let cachedConnection: mongoose.Connection | null = null;
let cachedPromise: Promise<mongoose.Connection> | null = null;

export async function dbConnect() {
  if (cachedConnection) {
    // console.log('====================================');
    // console.log(cached);
    // console.log('====================================');
    return cachedConnection;
  }
  let DB_NAME = process.env.MONGODB_DB!;
  if (!cachedPromise) {
    const opts = {
      bufferCommands: true,
      dbName: DB_NAME,
    };

    cachedPromise = mongoose
      .connect(mongodbUri, opts)
      .then((mongoose) => mongoose.connection);
  }

  try {
    cachedConnection = await cachedPromise;
    return cachedConnection;
  } catch (error) {
    cachedPromise = null;
    throw new Error(`Error connecting to database ${error}`);
  }
}
