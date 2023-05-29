import express, { Application, Request, Response, urlencoded } from "express";
const app: Application = express();
import cors from "cors";

// middle were
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import userRouter from "./app/module/user/user.route";
import bookRouter from "./app/module/book/book.route";

// Home route
app.get("/", async (req: Request, res: Response) => {
  res.send({
    message: "Node is already running and working well ",
    uniqueId: Math.random(),
  });
});

app.use("/v1/app/book/", bookRouter);
app.use("/v1/app/user/", userRouter);

export default app;
