const { count } = require("console")
const { Module } = require("module")
const bookModel = require("../models/bookModel")
const BookModel= require("../models/bookModel")

const createBook= async function (req, res) {
    let data= req.body

    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {
    let allBooks= await BookModel.find( {authorName : "HO" } )
    console.log(allBooks)
    if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
    else res.send({msg: "No books found" , condition: false})
}


const updateBooks= async function (req, res) {
    let data = req.body // {sales: "1200"}
    // let allBooks= await BookModel.updateMany( 
    //     { author: "SK"} , //condition
    //     { $set: data } //update in data
    //  )
    let allBooks= await BookModel.findOneAndUpdate( 
        { authorName: "ABC"} , //condition
        { $set: data }, //update in data
        { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
     )
     
     res.send( { msg: allBooks})
}

const deleteBooks= async function (req, res) {
    // let data = req.body 
    let allBooks= await BookModel.updateMany( 
        { authorName: "FI"} , //condition
        { $set: {isDeleted: true} }, //update in data
        { new: true } ,
     )
     
     res.send( { msg: allBooks})
}




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE


const createNewBooks = async function(req,res){
    const reqBook = req.body;
    const saved = await bookModel.create(reqBook)
    res.send({msg: saved})
}

const createNewAuthor = async function(req,res){
    const reqAuthor = req.body;
    const saved = await bookModel.create(reqAuthor)
    res.send({msg: saved})
}

const allBooks = async function(req,res){
    const authorDetails = await bookModel.find({authorName: "Chetan Bhagat"})
    const id = authorDetails[0].authorId
    const booksName = await bookModel.find({authorId: id}).select({bookName: 1})
    res.send({msg: booksName})
}


const findAndUpdate = async function(req, res){
    const bookDetails = 'Two states';
    const findBook = await bookModel.findOneAndUpdate({bookName: bookDetails}, {prices: 100},{new: true})
    const id = findBook.authorId
    const findAuthor = await bookModel.findOne({authorId: id})
    res.send({authorName: findAuthor.authorName, bookName: findBook})
}

const bookAndAuthor = async function (req, res){
    const allIds = await bookModel.find({prices: {$gte: 50, $lte: 100}}).select({authorId: 1, id: 0})
    const id = allIds.map(x => x.authorId)
    const arr = []
    for (let i of id){
        arr.push(await bookModel.findOne({authorId: i}).select({authorName: 1, id: 0}))
    }
    res.send(arr)
}

module.exports.bookAndAuthor = bookAndAuthor
module.exports.findAndUpdate = findAndUpdate
module.exports.allBooks = allBooks
module.exports.createNewBooks = createNewBooks
module.exports.createNewAuthor = createNewAuthor
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.updateBooks= updateBooks
module.exports.deleteBooks= deleteBooks
