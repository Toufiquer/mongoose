import express from "express";
import {
  createBook,
  getABooksById,
  getABooksByIdName,
  getAllBooks,
} from "./book.controller";
const router = express.Router();
router.get("/allBooks", getAllBooks);
router.post("/createBooks", createBook);
router.get("/filter/:id", getABooksByIdName);
router.get("/:id", getABooksById);

export default router;
