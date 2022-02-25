const express = require('express');
const router = express.Router();
const {ensureAuth}= require("../middleware");
//login page
router.get('/',(req,res) => {
    if(req.isAuthenticated()){
        res.render('Home.ejs',{authenticated:true});
    }
    else{
        res.render('Home.ejs',{authenticated:false});
    }
 
})
router.get('/signup',(req,res) => {
    if(req.isAuthenticated()){
        res.render('Login.ejs',{authenticated:true});
    }
    else{
        res.render('Login.ejs',{authenticated:false});
    }
})

//get dashboard
router.get('/dashboard',ensureAuth,(req,res) => {
    res.render('dashboard',{
       user:req.user
    })
})



module.exports =router;