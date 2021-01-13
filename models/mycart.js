
const mongoose = require('mongoose');

const mycart = new mongoose.Schema({
    userId:String,
    // user:Object,
    mycart:{
      total: Number,
      product:[ { 
        name: String,
        img: String,
        price: Number,
        quantity: Number 
      }],
    },
    date: {
        type: Date,
        default: Date.now
    }
  });
  
module.exports = mongoose.model('mycart', mycart);