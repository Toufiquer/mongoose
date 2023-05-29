import { NextFunction, Request, Response } from "express";
import {
  getBooks,
  getBooksById,
  getBooksByIdName,
  saveBook,
} from "./book.service";
import { BOOK } from "./book.interface";

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

export const createBook = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // const isSaveToDB = await saveBook(book()); // create a book by invoke book function
  const data: BOOK = req.body;
  const isSaveToDB = await saveBook(data);
  res.status(200).send({ isSaveToDB });
  return isSaveToDB;
};

export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const isSaveToDB = await getBooks();
  res.status(200).send({ isSaveToDB });
  return isSaveToDB;
};

export const getABooksById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const isSaveToDB = await getBooksById(parseInt(id));
  res.status(200).send({ isSaveToDB });
  return isSaveToDB;
};

export const getABooksByIdName = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { id } = req.params;

  const isSaveToDB = await getBooksByIdName(parseInt(id));
  res.status(200).send({ isSaveToDB });
  return isSaveToDB;
};
