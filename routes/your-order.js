const express = require('express');
const yourorder_router = new express.Router();

const mycart = require('../models/mycart');

yourorder_router.get("/your-order",async(req, res) => {
    let orders = await mycart.find({userId:req.session.user._id})

    if(req.session){
        res.locals.connect= req.session.connect,
        res.locals.firstname= req.session.firstname,

        res.locals.errorMail= req.session.errorMail,
        res.locals.errorPass= req.session.errorPass,
        
        res.locals.searchEchec= req.session.searchEchec,
        res.locals.searchSucces= req.session.searchSucces,
        res.locals.searchPrice= req.session.searchPrice
    };
    req.session.searchEchec=undefined;
    req.session.searchSucces=undefined;
    req.session.searchPrice= undefined; 
    
    req.session.errorMail=undefined,
    req.session.errorPass=undefined,

    res.render("your-order",{orders:orders});
});

module.exports = yourorder_router;
