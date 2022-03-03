const newPublisherModel = require("../models/newPublisherModel")

const createPublisher= async function (req, res) {
    let publisher = req.body
    let publisherCreated = await newPublisherModel.create(publisher)
    res.send({data: publisherCreated})
}

const getPublishersData= async function (req, res) {
    let publishers = await newPublisherModel.find()
    res.send({data: publishers})
}

module.exports.createPublisher= createPublisher
module.exports.getPublishersData= getPublishersData

// 5. 
const createNewPublisher= async function (req, res) {
    let newPublisher = req.body
    let newPublisherCreated = await newPublisherModel.create(newPublisher)
    res.send({data: newPublisherCreated})
}

const getNewPublishersData= async function (req, res) {
    let newPublishers = await newPublisherModel.find()
    res.send({data: newPublishers})
}

module.exports.createNewPublisher= createNewPublisher
module.exports.getNewPublishersData= getNewPublishersData