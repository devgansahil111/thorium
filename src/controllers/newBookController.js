const { count } = require("console")
const newAuthorModel = require("../models/newAuthorModel")
const newBookModel= require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")

const createBook= async function (req, res) {
    let data = req.body
    if (data.author && data.publisher){
        const author = await newAuthorModel.findOne({_id: {$in: data.author}})
        const publisher = await newPublisherModel.findOne({_id: {$in: data.publisher}})
        if (!author){
            return res.send({Err:"author not present in DB"})
        }
        if (!publisher){
            return res.send({Err: "publisher not present in DB"})
        }
        // return res.send(publisher)
        const book = await newBookModel.create(data)
        return res.send(book)
    }
    res.send({Err: "missing author or publisher name"})
}

const getBooksData= async function (req, res) {
    let books = await newBookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await newBookModel.find().populate('author_id')
    res.send({data: specificBook})

}

const getBooksWithPublisherDetails = async function (req, res) {
    let specificBookOne = await newBookModel.find().populate('publisher')
    res.send({data: specificBookOne})

}

const x = async function (req, res) {
    let both = await newBookModel.find().populate("author_id", "publisher")
    res.send({data: both})
}


// 5.
const createNewBook = async function (req, res) {
    let newData = req.body
    // if (data.newAuthor && data.newPublisher){
    //     const newAuthor = await newAuthorModel.findOne({_id: {$in: data.newAuthor}})
    //     const newPublisher = await newPublisherModel.findOne({_id: {$in: data.newPublisher}})
        const newBook = await newBookModel.create(newData)
        return res.send(newBook)
    }
// }

const getNewBooksData= async function (req, res) {
    let newBooks = await newBookModel.find()
    res.send({data: newBooks})
}

// Aggregation pipelines consist of one or more stages that process the docs.
// Each stage performs an one particular operation on the input docs.
// output of stage 1 goes to next stage.
// An aggregation can return calculated results.


// Middleware

const putBook = async function (req, res) {
    const update = await newBookModel.updateMany({ $or: [{"newPublishers": "62206bca3b9fc97a81cf3c61"}, {"newPublishers": "62206c1f3b9fc97a81cf3c67"}]}, {"isHardCover": true}, {new: true})
    res.send(update)
} 

const updatePrice = async function (req, res) {
    const newPrice = await newBookModel.updateMany({ aRating: {$gte: 3.5}},{bPrice:100},{new: true})
    res.send(newPrice)
}

module.exports.updatePrice = updatePrice
module.exports.putBook = putBook
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithPublisherDetails = getBooksWithPublisherDetails
module.exports.x = x
module.exports.createNewBook = createNewBook
module.exports.getNewBooksData = getNewBooksData