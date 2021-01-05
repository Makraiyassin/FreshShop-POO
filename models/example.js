
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yassin:68qxFWH6Ac3xdrc4@clusteryassin.1g10r.mongodb.net/freshshop', {useNewUrlParser: true,useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

const users = new mongoose.Schema({
    mail: String,
    pass: String,
    date: {
        type: Date,
        default: Date.now
    }
});

users.methods.speak = function () {
    const greeting = this.mail
      ? "My mail is " + this.mail
      : "I don't have a mail";
    console.log(greeting);
  }
  

const user = mongoose.model('user', users);

const yassin = new user({ mail: 'yassin@gmail.com' });

const hamza = new user({ mail: 'hamza@gmail.com' });

hamza.save(function (err, hamza) {
    if (err) return console.error(err);
    hamza.speak();
  });

user.find(function (err, users) {
    if (err) return console.error(err);
    console.log(users);
})


//=========================================================================
//MYSQL


// function dbconnect() {
//     let mysql      = require('mysql');
//     let connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'freshshop'
//     });
    
//     connection.connect();

//     return connection;
// }

// insertuser()

// function insertuser() {
//     let db = dbconnect();

//     //POST
    
//     let mail = "m.yassin@gmail.com"; 
//     let pass= "123";

//     let crypto= require('crypto')
//     const hash = crypto.createHmac('sha256', pass)
//         .update('abcd1234')
//         .digest('hex');
//     console.log(hash);
//     let data = [];

//     db.query('INSERT INTO user SET mail=?, pass=?', data,(err,user,field)=>{
//         if(err) throw err
//     })
// }