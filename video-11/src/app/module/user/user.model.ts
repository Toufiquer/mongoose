import { Schema, model } from "mongoose";
import { USER } from "./user.interface";
import { BOOK } from "../book/book.interface";

const BookSchema = new Schema<BOOK>({
  id: Number,
  name: String,
  author: {
    name: String,
    id: Number,
  },
  price: Number,
});

const UserSchema = new Schema<USER>({
  id: Number,
  name: String,
  roll: Number,
  className: Number,
  subject: [BookSchema],
  regular: Boolean,
  gender: String,
});

export const M_user = model<USER>("USER", UserSchema);
