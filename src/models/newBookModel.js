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
    publisher: {
        type: ObjectId,
        ref: "Publisher"
    }


}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)

// 5.
const bSchema = new mongoose.Schema({
    bName: String,
    authorId: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    bPrice: Number,
    bRatings: Number,
    publisherId: {
        type: ObjectId,
        ref: "NewPublisher"
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("NewBooks", bSchema)