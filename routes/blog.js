const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware");
const Blog = require("../models/blog");
const User = require("../models/user");
const mongoose = require("mongoose");
//write route
router.get("/write", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("write.ejs", { authenticated: true });
  }
  else{
    res.redirect("/signup");
  }
});

//get all blogs
router.get("/blogs", (req, res) => {
    
     Blog.find({},function(err, blogs){
        if (req.isAuthenticated()) {
            res.render("blogs.ejs", { authenticated: true,blogs });
          }
          else{
            res.render("blogs.ejs", { authenticated:false,blogs: blogs });
          }
    })
   
});
//post blog
router.post('/write/post',async(req,res)=>{
  const {title,desc,body} = req.body;
  let blog={
    title,
    shortDescription:desc,
    body,
    author:req.user._id
  }
  Blog.create(blog,(err, blog)=>{
    console.log('new blog created')
  })
  res.redirect('/blog/blogs');
})

//get each blog
router.get('/:id',(req,res)=>{
  Blog.findById(req.params.id,(err,blog)=>{
    res.render('blog.ejs',{blog:blog})
  })
})

module.exports = router;
