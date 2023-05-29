import { Model, Schema, model } from "mongoose";
import { BOOK, BOOK_NAME_PRICE } from "./book.interface";

type BookModel = Model<BOOK, {}, BOOK_NAME_PRICE>;

const BookSchema = new Schema<BOOK, BookModel, BOOK_NAME_PRICE>({
  id: Number,
  name: String,
  author: {
    name: String,
    id: Number,
  },
  price: Number,
});


// instance methods
BookSchema.method("getNamePrice", function getNamePrice() {
  return this.name + " " + this.price;
});

export const M_book = model<BOOK, BookModel>("Book", BookSchema);
