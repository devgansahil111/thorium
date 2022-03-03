const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    // author_id: String,
    author_name: String,
    age:Number,
    address:String

}, { timestamps: true });

module.exports = mongoose.model('Author', authorSchema)


// 5.
const aSchema = new mongoose.Schema({
    aName: String,
    aAge: Number,
    aAddress: String,
    aRating: Number
}, {timestamps: true})

module.exports = mongoose.model("NewAuthor", aSchema)
