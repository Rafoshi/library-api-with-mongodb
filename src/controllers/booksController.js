import books from "../models/Book.js";

class BookController {
    static getBooks(request, response) {
        books.find().populate('author').exec((err, books) => {
            response.status(200).json(books)
        })
    }

    static getBookById(request, response) {
        let id = request.params.id;

        books.findById(id, (err, books) => {
            if (!err) {
                response.status(200).send(books);
            } else {
                response.status(400).send({
                    message: err.message
                })
            }
        })
    }

    static creatBook(request, response) {
        let book = new books(request.body);

        book.save((err) => {
            if (!err) {
                response.status(200).send(book.toJSON());
            } else {
                response.status(500).send({
                    message: err.message
                })
            }
        })
    }

    static deleteBook(request, response) {
        const id = request.params.id;

        books.findByIdAndDelete(id, (err, books) => {
            if (!err) {
                response.status(200).send({
                    message: `The ${books.title} was deleted.`
                })
            } else {
                response.status(400).send({
                    message: err.message
                })
            }
        })
    }

    static updateBook(request, response) {
        let id = request.params.id;

        books.findByIdAndUpdate(id, {
            $set: request.body
        }, (err) => {
            if (!err) {
                response.status(200).send('Book updated')
            } else {
                response.status(400).send({
                    message: err.message
                })
            }
        })
    }
}

export default BookController;