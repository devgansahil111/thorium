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
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.getBooksWithPublisherDetails = getBooksWithPublisherDetails
module.exports.x = x
