import { Router } from "express";
import {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
} from "../controllers/book.controllers.js";

const bookRouter = Router();

bookRouter.get("/books", getAllBooks);
bookRouter.get("/books/:id", getBookById);
bookRouter.post("/books", createBook);
bookRouter.put("/books/:id", updateBook);
bookRouter.delete("/books/:id", deleteBook);

export { bookRouter };
