
const express = require('express');
const contact_router = new express.Router();
const Message = require("../models/message");

contact_router.post('/contact-us',(req,res)=>{
    let msg = new Message({ 
        name:req.body.name, 
        mail: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    });

    msg.save(function (err, msg) {
        if (err){console.log(err);}else{console.log(msg);}
    });
    res.redirect('/contact-us');
})


module.exports = contact_router;