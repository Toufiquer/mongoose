import { Schema, model } from "mongoose";
import { BOOK } from "./book.interface";

const BookSchema = new Schema<BOOK>({
  id: Number,
  name: String,
  author: {
    name: String,
    id: Number,
  },
  price: Number,
});



export const M_book = model<BOOK>("Book", BookSchema);
