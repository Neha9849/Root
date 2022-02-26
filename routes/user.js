const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware");
const Blog = require("../models/blog");
const User = require("../models/user");
const mongoose = require("mongoose");
//get user by id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  User.findById(id)
    .then((user) => {
      Blog.find({ author: id })
        .then((blogs) => {
          console.log(blogs.length);
          if (id == req.user._id) {
            res.render("dashboard.ejs",{user,blogs,authenticated:false});
          } else {
            res.render("Profile.ejs",{user,blogs,authenticated:false});
          }
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
