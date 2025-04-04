const mongoose = require('mongoose')

const positionSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    product: String,
    isLoss: Boolean,
})

module.exports = mongoose.model('position', positionSchema);