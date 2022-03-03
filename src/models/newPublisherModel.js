const mongoose = require('mongoose');

const publisherSchema = new mongoose.Schema({
    publisher_name: String,
headQuarter: String,
// publisher: String

},{timestamps: true});

module.exports = mongoose.model('Publisher', publisherSchema)


// 5. 
const pSchema = new mongoose.Schema({
    pName: String,
    hQ: String
}, {timestamps: true});

module.exports = mongoose.model("NewPublisher", pSchema)