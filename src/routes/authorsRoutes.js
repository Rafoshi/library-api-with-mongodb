import express from 'express';
import AuthorsController from '../controllers/authorsController.js';

const router = express.Router();

router
    .get('/authors', AuthorsController.getAuthors)
    .post('/authors', AuthorsController.createAuthor)

export default router;