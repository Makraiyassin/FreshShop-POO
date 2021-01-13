
const express = require('express');
const router = new express.Router();
const bcrypt = require('bcrypt')

//function pour construire les routes
const getRoute = (route, file) =>{
    router.get(route,(req, res) => {

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

        res.render(file);
    });
        
}

//ROUTES

getRoute("/","index")
getRoute("/contact-us","contact-us")
getRoute("/about","about")
getRoute("/gallery","gallery")
getRoute("/shop","shop")
getRoute("/my-account","my-account")
getRoute("/cart","cart")
getRoute("/shop-detail","shop-detail")
getRoute("/wishlist","wishlist")

getRoute("/login-register","login-register")
getRoute("/logout","login-register")

getRoute("/search","")

getRoute("/login-security","login-security")
getRoute("/your-adresses","your-adresses")



module.exports = router;
