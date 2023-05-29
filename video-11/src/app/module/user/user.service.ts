import {  USER } from "./user.interface";
import {  M_user } from "./user.model";

export const saveUser = async (
  data: USER
): Promise<{ newUser: USER; result: USER }> => {
  const newUser = new M_user(data);
  const result = await newUser.save();
  return { newUser, result };
};


