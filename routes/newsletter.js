const express = require('express');
const newsletter_router = new express.Router();

const Newsletter = require("../models/newsletter");

newsletter_router.post('/newsletter',(req,res)=>{
    let mail = new Newsletter({ mail: req.body.email});
    // mail.save()
    mail.save(function (err, mail) {
        if (err){console.log(err);}else{console.log(mail);}
    });
    res.redirect('back');
})

module.exports= newsletter_router;