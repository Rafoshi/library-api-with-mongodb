import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'authors',
        require: true
    }
})

const books = mongoose.model('books', bookSchema);

export default books;