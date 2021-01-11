
const express = require('express');
const mycart_router = new express.Router();
const Mycart = require("../models/mycart");


mycart_router.post('/mycart',(req,res)=>{
    
    req.session.order=req.body;

    const mycart = new Mycart({
        mycart:req.session.order
    })

    mycart.save(function (err, mycart) {
        if (err){console.log(err);}else{console.log(mycart);}
    });
    console.log(req.session);
    res.redirect('back');
})



module.exports = mycart_router;