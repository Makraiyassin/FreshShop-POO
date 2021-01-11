
const mongoose = require('mongoose');

const newsletter = new mongoose.Schema({
    mail: String,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('newsletter', newsletter);

//=========================================================




// let mail = new newsletter({ mail: 'yassin@gmail.com' });
// mail.save(function (err, mail) {
//     if (err) return console.error(err);
// });


