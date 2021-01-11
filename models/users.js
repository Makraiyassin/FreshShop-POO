
const mongoose = require('mongoose');

const users = new mongoose.Schema({
    firstname: String,
    lastname: String,
    mail: String,
    pass: String,
    date: {
        type: Date,
        default: Date.now
    }
  });
  
  module.exports = mongoose.model('user', users);