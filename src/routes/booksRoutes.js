import express from 'express';
import BookController from '../controllers/booksController.js';

const router = express.Router();

router
    .get('/books', BookController.getBooks)
    .get('/books/:id', BookController.getBookById)
    .post('/books', BookController.creatBook)
    .delete('/books/:id', BookController.deleteBook)
    .put('/books/:id', BookController.updateBook)

export default router;