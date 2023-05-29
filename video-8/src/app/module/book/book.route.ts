import express from "express";
import { createBook, getAllBooks } from "./book.controller";
const router = express.Router();
router.get("/allBooks", getAllBooks);
router.post("/createBooks", createBook);

export default router;
