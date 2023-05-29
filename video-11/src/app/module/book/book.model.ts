import { Model, Schema, model } from "mongoose";
import { BOOK, BOOK_NAME_PRICE_BOTH } from "./book.interface";

// type BOOK_STATIC = Model<BOOK, {}, BOOK_NAME_PRICE_STATIC>;

const BookSchema = new Schema<
  BOOK,
  BOOK_NAME_PRICE_BOTH
  // BOOK_NAME_PRICE_STATIC
>({
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

// Static methods
BookSchema.static("getStaticNamePrice", function getStaticNamePrice() {
  return this.name;
});
export const M_book = model<BOOK, BOOK_NAME_PRICE_BOTH>("Book", BookSchema);
