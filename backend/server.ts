import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { dbConnect } from "./configs/db";
import routerAuth from "./routes/jwt/authRoute";
import routerBestSelling from "./routes/product/routerBestsellin";
import routerProduct from "./routes/product/routerProduct";
import routerUser from "./routes/user/userRoutes";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;

app.use("/api/v1/user/", routerUser);
app.use("/api/v1/auth/", routerAuth);
app.use("/api/v1/product/", routerProduct);
app.use("/api/v1/home/", routerBestSelling);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from TypeScript Express Server!");
});

async function Main() {
  await dbConnect();
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}
Main();
