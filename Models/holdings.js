const mongoose = require('mongoose')

const holdingSchema = new mongoose.Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss:{
      type:  Boolean,
        default:true,
    }
})

module.exports = mongoose.model('holding', holdingSchema);