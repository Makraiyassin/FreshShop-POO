
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yassin:68qxFWH6Ac3xdrc4@clusteryassin.1g10r.mongodb.net/freshshop', {useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

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