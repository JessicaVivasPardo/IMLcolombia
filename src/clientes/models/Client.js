const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: String,
    email: String,
    message: String,
    tel: Number,
    service: String
});

module.exports = mongoose.model('Client',ClientSchema);