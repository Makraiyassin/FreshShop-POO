const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 8000;

//ROUTES (importe les route defini dans le dossier "routes")
const router = require('./routes/router');
const LogReg_router = require('./routes/login-register');
const newsletter_router=  require('./routes/newsletter');
const contact_router=  require('./routes/contact');

const mycart_router=  require('./routes/mycart');
const search_router=  require('./routes/search');

const checkout_router=  require('./routes/checkout');



//CONNECTION A LA BASE DE DONNEE
const db = require("./models/db");

//SESSION
const session = require('express-session');

// Moteur de template
app.set('view engine','ejs');

//Midleware 

    // front-end (css + js)
    app.use('/public',express.static('public'));

    //body parser 
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());

    //SESSION
    app.use(session({
        secret: 'azerty',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }))


    //Routes (utilise les route defini dans le dossier "routes")
    app.use(router)
    app.use(LogReg_router)
    app.use(newsletter_router)
    app.use(contact_router)
    app.use(mycart_router)
    app.use(search_router)
    app.use(checkout_router)





app.listen(port);

console.log('serveur ok');
