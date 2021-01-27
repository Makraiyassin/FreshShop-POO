
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_CONNECT, {useNewUrlParser: true,useUnifiedTopology: true }); //68qxFWH6Ac3xdrc4

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

