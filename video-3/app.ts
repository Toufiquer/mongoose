import express, {
  Application,
  NextFunction,
  Request,
  Response,
} from "express";

import cors from "cors";

const app: Application = express();
// const app: Express = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {

  res.send({ message: "Server is working 222" });
  // res.send("nothing to show")
});

export default app;

// 