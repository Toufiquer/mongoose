import { NextFunction, Request, Response } from "express";
import { createUser } from "./user.service";

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
