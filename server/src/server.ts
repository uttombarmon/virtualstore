import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  console.log("Received a request on /");
  res.send("Hello World from TypeScript Express Server!___ code running");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
