import { BOOK } from "./book.interface";
import { M_book } from "./book.model";

export const saveBook = async (
  data: BOOK
): Promise<{ newBook: BOOK; result: BOOK }> => {
  const newBook = new M_book(data);
  const result = await newBook.save();
  return { newBook, result };
};

export const getBooks = async (): Promise<{ result: BOOK[] }> => {
  const result = await M_book.find();
  return { result };
};
