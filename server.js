const express = require('express');
const app = express();

//models
const Message = require("./models/message");
const User = require("./models/users.js");
const Newsletter = require("./models/newsletter");


//session 
const session = require('express-session');

// Moteur de template
app.set('view engine','ejs');


//Midleware 

    // front-end (css + js)
    app.use('/public',express.static('public'));

    //body parser
    app.use(express.urlencoded({ extended: false }));


//Routes
     
//==================================================================    
// HOME

app.get("/",(req, res) => {
    res.render("index");
});

//==================================================================    
// NEWSLETTER

app.post('/',(req,res)=>{
    let mail = new Newsletter({ mail: req.body.email});
    mail.save(function (err, mail) {
        if (err){console.log(err);}else{console.log(mail);}
    });
    res.redirect('/');
})

//==================================================================
//CONTACT

app.get("/contact-us",(req, res) => {
    res.render("contact-us");
});

app.post('/contact-us',(req,res)=>{
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

//==================================================================
// LOGIN
app.get("/login",(req, res) => {
    res.render("login");
});

app.post('/login',(req,res)=>{
    let user = new User({ 
        firstname: req.body.fname,
        lastname: req.body.lname,
        mail: req.body.email,
        pass: req.body.pass,
    });

    user.save(function (err, user) {
        if (err){console.log(err);}else{console.log(user);}
    });
    res.redirect('/login');
})

//==================================================================
// ABOUT

app.get("/about",(req, res) => {
    res.render("about");
});

//==================================================================
// GALLERY

app.get("/gallery",(req, res) => {
    res.render("gallery");
});

//==================================================================
// SHOP

app.get("/shop",async(req, res) => {
    res.render("shop");
});

//==================================================================
// MY-ACCOUNT

app.get("/my-account",(req, res) => {
    res.render("my-account");
});

//==================================================================
// CART

app.get("/cart",(req, res) => {
    res.render("cart");
});

//==================================================================
// SHOP-DETAIL

app.get("/shop-detail",(req, res) => {
    res.render("shop-detail");
});

//==================================================================
// WISHLIST

app.get("/wishlist",(req, res) => {
    res.render("wishlist");
});

//=================================================================
// CHECKOUT

app.get("/checkout",(req, res) => {
    res.render("checkout");
});

//==================================================================

app.listen(8080);

console.log('serveur ok');
