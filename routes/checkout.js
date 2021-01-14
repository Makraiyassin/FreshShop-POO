const express = require('express');
const checkout_router = new express.Router();

const mycart = require('../models/mycart');

checkout_router.get("/checkout",async(req, res) => {
   
    if(req.session){
        res.locals.errorMail= req.session.errorMail,
        res.locals.errorPass= req.session.errorPass,
        
        res.locals.searchEchec= req.session.searchEchec,
        res.locals.searchSucces= req.session.searchSucces,
        res.locals.searchPrice= req.session.searchPrice
    };
    req.session.searchSucces=undefined;
    req.session.searchPrice= undefined; 
    
    req.session.searchEchec=undefined;
    req.session.errorMail=undefined;
    req.session.errorPass=undefined;

    if(req.session.user){
        let orders = await mycart.find({userId:req.session.user._id});
        res.render("checkout",{orders:orders,user:req.session.user,connect:req.session.connect});
        console.log(orders);
    }else{
        res.render("checkout",{user:req.session.user,connect:req.session.connect});

    }
});
//==============================================================================================
//DELETE

checkout_router.get("/remove/:id",(req, res) => {
    const id = req.params.id;
    console.log(req.params);
    mycart.findByIdAndDelete(id, err => {
        if (err){
            console.log(err);
        }else{
            res.redirect("back");    
        }
    });
});
//==============================================================================================
//UPDATE




module.exports = checkout_router;

