const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema( {
    // bookName: String, 
    // authorId: String, 
    // tags: [String],
    
    // isPublished: Boolean,
    // prices: {
    //     indianPrice: String,
    //     europePrice: String,
    // },
    // sales: {type: Number, default: 10},
    
    // " best boook on earth"   [ "Nodejs in detail" , "mongodb in detail", "frontend in detail"] 
    // {
        // "ch1 ": "awesome intro to JS",
        // "ch2" : "intro to nodejs",
        // "ch3" : "intro to db"
    //  }
    // summary :  mongoose.Schema.Types.Mixed,
    // isDeleted: Boolean //true on book deletion i.e you flag the document/data as isDeleted: true..(mark "dirty")

// }, { timestamps: true });

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true
    },
    authorId: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        unique: true
    },
    rating: Number
})

const authorSchema = new mongoose.Schema({
    authorId: {
        type: Number,
        required: true
    },
    authorName: String,
    age: Number,
    address: {
        type: String,
        unique: true
    }
})

module.exports = mongoose.model('Author', authorSchema)
module.exports = mongoose.model('Books Collection', bookSchema) 
