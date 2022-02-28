const express = require('express');
const router = express.Router();
const {ensureAuth}= require("../middleware");
const Blog = require('../models/blog')
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
    Blog.find({author:req.user.id}).then((blogs)=>{
        res.render('dashboard',{
            user:req.user,
            authenticated:true,
            blogs:blogs
         })
    }).catch((err) => {console.log(err)})
    
   
   
})



module.exports =router;