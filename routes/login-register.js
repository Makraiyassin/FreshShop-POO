const express = require('express');
const LogReg_router = new express.Router();
const bcrypt = require('bcrypt')

const User = require("../models/users");

// LOGIN/REGISTER

    //REGISTER

    LogReg_router.post('/register',async(req,res)=>{
        if(req.body.pass == req.body.confpass){
            let hashpass = await bcrypt.hash(req.body.pass,10)  
            let user = new User({ 
                firstname: req.body.fname,
                lastname: req.body.lname,
                mail: req.body.email,
                pass: hashpass,
            });
            
            user.save(function (err, user) {
                if (err){console.log(err);}else{console.log("register:",user);}
            });

            res.redirect('/login-register');   
        }else{
            res.redirect('/login-register');   
        }
         

    })

    //LOGIN

    LogReg_router.post('/login',async(req,res)=>{

        const _user = await User.findOne({mail:req.body.email})

        if(_user){

            const verification = await bcrypt.compare(req.body.password, _user.pass)

            if (verification){
                req.session.connect = true;
                req.session.firstname = _user.firstname;
                req.session.user=_user;
                // console.log(_user);
                console.log('success');
                res.redirect('/');
            } else {
                req.session.errorPass = 'password incorect';
                res.redirect('back');  
            }

        }else{        
            req.session.errorMail = "email incorrect";
            res.redirect('back');
           
        }
      
        console.log("/login:",req.session);
        
    })
    

    //LOGOUT

    LogReg_router.post('/logout',(req,res)=>{
        req.session.destroy()
        res.redirect('/login-register');

    })

    module.exports = LogReg_router;














//=================================================================================================

// LOGIN/REGISTER
    //REGISTER

    // LogReg_router.post('/register',async(req,res)=>{
    //     let hashpass = await bcrypt.hash(req.body.pass,10)  //bcrypt.compare(<req.body.>loginpass, registerpass)
    //     let user = new User({ 
    //         firstname: req.body.fname,
    //         lastname: req.body.lname,
    //         mail: req.body.email,
    //         pass: hashpass,
    //     });

    //     user.save(function (err, user) {
    //         if (err){console.log(err);}else{console.log(user);}
    //     });
    //     res.redirect('/login-register');
    // })

    // //LOGIN

    // LogReg_router.post('/login',async(req,res)=>{
    //     User.find(null, function (err, user){

    //         if (err) { throw err; }
    //         // console.log(user);

    //         const _user = user.find(element => element.mail == req.body.email)
    //         console.log( _user+' et '+ req.body.email );

    //         // VERIFICATION USER MAIL:

    //         if (_user !=  undefined){
    //             if(req.body.email == _user.mail){
    //                 console.log('email ok');
    //             }
    //         }else{
    //             console.log("email incorrect");
    //         }

    //         // VERIFICATION PASSWORD:
            
    //         if (_user !=  undefined){
    //             bcrypt.compare(req.body.password, _user.pass, function(err, res) {
    //                 if (err){
    //                   console.log(err);
    //                 }
    //                 if (res){
    //                   console.log("pass ok");
    //                 } else {
    //                     console.log('pass incorect');
    //                 }
    //             });    
    //         }else{
    //             console.log("erreur: email introuvable");
    //         }
    //     });

    //     res.redirect('/login-register');
    // })
       

    // module.exports = LogReg_router;


