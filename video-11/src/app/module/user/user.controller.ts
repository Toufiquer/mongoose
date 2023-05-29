import { NextFunction, Request, Response } from "express";
import { saveUser } from "./user.service";
import { USER } from "./user.interface";
import { BOOK } from "../book/book.interface";

const book = (): BOOK => {
  return {
    id: Math.random(),
    name: "Books 1",
    author: {
      name: "Author 1",
      id: Math.random(),
    },
    price: 100,
  };
};

const user = (): USER => {
  return {
    id: Math.random(),
    name: "String",
    roll: 555,
    className: 5,
    subject: [book(), book(), book()],
    regular: true,
    gender: "Male",
  };
};
export const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isSaveToDB = await saveUser(user());
  res.status(200).send({ isSaveToDB });
  return isSaveToDB;
};
