
const express = require('express');
const search_router = new express.Router();
const Product = require("../models/products");

search_router.post('/search',async(req,res)=>{

    const _product = await Product.findOne({name:req.body.search})
    if (_product) {
        req.session.searchSucces=true;
        req.session.searchPrice=_product.price;
        req.session.searchEchec=undefined;
    }else{
        req.session.searchSucces=undefined;
        req.session.searchPrice=undefined;
        req.session.searchEchec=true;
    }
    res.redirect('back');

    console.log(req.session);
})    


module.exports = search_router;