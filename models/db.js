
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yassin:Azerty92-@clusteryassin.1g10r.mongodb.net/freshshop', {useNewUrlParser: true,useUnifiedTopology: true }); //68qxFWH6Ac3xdrc4

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!");
});

