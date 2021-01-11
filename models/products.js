
const mongoose = require('mongoose');

const product = new mongoose.Schema({
    name: String,
    price: Number,
    date: {
        type: Date,
        default: Date.now
    }
  });
  
  module.exports = mongoose.model('product', product);