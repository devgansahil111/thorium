const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema) //users



// String, Number
// Boolean, Object/json, array


// Assignment - BookSchema - BookName, AuthorName, Category, Year - 1st api => create new book, 2nd api => list of all books

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        unique: true
    },
    authorName: {
        type: String,
        required: true
    },
    bookCategory: {
        type: String,
        unique: true,
        required: true
    },
    publishYear: Number
}, { timestamps: true} );

module.exports = mongoose.model('Book',bookSchema)
