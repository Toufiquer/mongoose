import express, {
  Application,
  NextFunction,
  Request,
  Response,
} from "express";

import cors from "cors";
import { Schema } from "mongoose";

const app: Application = express();
// const app: Express = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  // Create an Interface
  interface IUser {
    id: string;
    roll: number;
    password: string;
    gender: "male" | "female";
    name: {
      firstName: string;
      middleName?: string;
      lastName: string;
    };
    dateOfBirth: string;
    email: string;
    contactNo: string;
    emergencyContactNo?: string;
  }
  // create an schema using interface
  const userSchema = new Schema<IUser>({
    id: { type: String, required: true, unique: true },
    roll: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    gender: {
      type: String,
      enum: ["male", "female"],
    },
    name: {
      type: {
        firstName: {
          type: String,
          required: true,
          unique: true,
        },
        middleName: {
          type: String,
          required: false,
          unique: true,
        },
        lastName: {
          type: String,
          required: true,
          unique: true,
        },
      },
      required: true,
      unique: true,
    },
    dateOfBirth: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    contactNo: { type: String, required: true, unique: true },
    emergencyContactNo: { type: String, unique: true },
  });



  res.send({ message: "Server is working 222" });
  // res.send("nothing to show")
});

export default app;
