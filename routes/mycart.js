
const express = require('express');
const mycart_router = new express.Router();
const Mycart = require("../models/mycart");


mycart_router.post('/mycart',(req,res)=>{
    if(req.session.connect){
        // req.session.order=req.body;
        
        const mycart = new Mycart({
            userId:req.session.user._id,
            mycart:req.body
        })
    
        mycart.save(function (err, mycart) {
            if (err){console.log(err);}else{console.log("my cart:",mycart);}
        });


        res.redirect('/your-order');    
    }
})



module.exports = mycart_router;