import { BOOK } from "./book.interface";
import { M_book } from "./book.model";

export const saveBook = async (
  data: BOOK
): Promise<{ newBook: BOOK; result: BOOK }> => {
  const newBook = new M_book(data);

  newBook.getNamePrice();
  const result = await newBook.save();
  return { newBook, result };
};

export const getBooks = async (): Promise<{ result: BOOK[] }> => {
  const result = await M_book.find();
  return { result };
};

export const getBooksById = async (
  id: number
): Promise<{ result: BOOK | null }> => {
  const result = await M_book.findOne({ id });
  return { result };
};

export const getBooksByIdName = async (
  id: number
): Promise<{ result: BOOK | null }> => {
  const result = await M_book.findOne({ id }, { name: 1, price: 1 });
  return { result };
};

export const getBooksByIdNameInstance = async (
  id: number
): Promise<{ result: BOOK | null }> => {
  // console.log(, ' => Line No: 36');
  const result = await M_book.findOne({ id }, { name: 1, price: 1 });
  return { result };
};
