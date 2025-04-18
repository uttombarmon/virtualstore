import express, { Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World from TypeScript Express Server!");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
