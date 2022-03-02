const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
// const ObjectIdd = mongoose.Schema.Types.ObjectIdd

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
    price: Number,
    ratings: Number,
    publisher: mongoose.Schema.Types.ObjectId


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
