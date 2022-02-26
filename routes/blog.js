const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware");
const Blog = require("../models/blog");
const User = require("../models/user");
const mongoose = require("mongoose");
//get write route
router.get("/write", (req, res) => {
  if (req.isAuthenticated()) {
    res.render("write.ejs", { authenticated: true });
  } else {
    res.redirect("/signup");
  }
});

//get all blogs
router.get("/blogs", (req, res) => {
  const modifiedBlogs = [];
  Blog.find().populate("author").then(blogs=>{
    blogs.reverse();
    if(req.isAuthenticated()){
      res.render("blogs.ejs", {blogs,authenticated:true})
    }
    else{
      res.render("blogs.ejs", {blogs,authenticated:false})
    }
   
  }).catch(err => {console.log(err)});
});
//post blog
router.post("/write/post", async (req, res) => {
  const { title, desc, body } = req.body;
  let blog = {
    title,
    shortDescription: desc,
    body,
    author: req.user._id,
  };
  Blog.create(blog, (err, blog) => {
    console.log("new blog created");
  });
  res.redirect("/blog/blogs");
});

//get each blog
router.get("/:id", (req, res) => {
 
  Blog.findById(req.params.id).populate('author').then((blog)=>{
    if(req.isAuthenticated()){
      res.render("blog.ejs", { blog: blog ,authenticated: true });
    }
    else{
      res.render("blog.ejs", { blog: blog ,authenticated: false});
    }
  }).catch(err=>console.log(err));
  // (err, blog) => {
  //   if(req.isAuthenticated()){
  //     res.render("blog.ejs", { blog: blog ,authenticated: true });
  //   }
  //   else{
  //     res.render("blog.ejs", { blog: blog ,authenticated: false});
  //   }
   
  // }
});

module.exports = router;
