import express, { Application, NextFunction, Request, Response } from "express";

import cors from "cors";
import { Schema, model } from "mongoose";

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
    // if skip required and unique. then it will define false as default value
    // skip => required: false,
    // skip => unique: false
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

  // create a model using the schema and interface
  const User = model<IUser>("User", userSchema);

  const addUser = async () => {
    const user = new User({
      id: "stringqwe",
      roll: 34324,
      password: "st2ring",
      gender: "male",
      name: {
        firstName: "str2ing",
        middleName: "str2ing;",
        lastName: "stri2ng;",
      },
      dateOfBirth: "new 2Date()",
      email: " strin2g;",
      contactNo: "st2ring",
      emergencyContactNo: "str2ing",
    });
    console.log(user, " => Line No: 92222");
    await user.save();
  };
  addUser();

  res.send({ message: "Server is working 222" });
  // res.send("nothing to show")
});

export default app;
