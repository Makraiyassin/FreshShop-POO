
const mongoose = require('mongoose');

const message = new mongoose.Schema({
    name: String,
    mail: String,
    subject: String,
    message: String,
    date: {
        type: Date,
        default: Date.now
    }
  });
  
  module.exports = mongoose.model('message', message);