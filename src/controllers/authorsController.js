import authors from '../models/Author.js'

class AuthorController {
    static getAuthors(request, response) {
        authors.find((err, authors) => {
            if (!err) {
                response.status(200).send(authors)
            } else {
                response.status(500).send({
                    message: err.message
                })
            }
        })
    }

    static createAuthor(request, response) {
        const author = new authors(request.body);

        author.save((err) => {
            if (!err) {
                response.status(200).send('Author created')
            } else {
                response.status(500).send({
                    message: err.message
                })
            }
        })
    }
}

export default AuthorController;