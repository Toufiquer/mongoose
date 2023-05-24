import { NextFunction, Request, Response } from "express";
import { createUser, getUsers } from "./user.service";
import { IUser } from "./user.interface";

export const controlCreateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;
  const result = await createUser(data);
  res.status(200).send({ result });
  return result;
};

export const controlGetUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = await getUsers();
  res.send(result);
  return result;
};
