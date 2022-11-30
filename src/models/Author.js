import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema({
    id: {
        type: String
    },
    name: {
        type: String,
        require: true
    }
})

let authors = mongoose.model('authors', authorSchema);

export default authors;