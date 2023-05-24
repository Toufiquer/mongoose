import express, { Application } from "express";
import cors from "cors";
import userRouteV1 from "./v1/app/modules/user/user.route";
const app: Application = express();
app.use(cors());
app.use(express.json());
app.use("/api/v1/user/", userRouteV1);

export default app;
