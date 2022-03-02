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