const newAuthorModel= require("../models/newAuthorModel")

const createAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await newAuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
    let authors = await newAuthorModel.find()
    res.send({data: authors})
}

module.exports.createAuthor= createAuthor
module.exports.getAuthorsData= getAuthorsData

// 5. 
const createNewAuthor= async function (req, res) {
    let newAuthor = req.body
    let newAuthorCreated = await newAuthorModel.create(newAuthor)
    res.send({data: newAuthorCreated})
}

const getNewAuthorsData= async function (req, res) {
    let newAuthors = await newAuthorModel.find()
    res.send({data: newAuthors})
}

module.exports.createNewAuthor= createNewAuthor
module.exports.getNewAuthorsData= getNewAuthorsData