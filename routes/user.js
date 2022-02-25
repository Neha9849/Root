const express = require("express");
const router = express.Router();
const { ensureAuth } = require("../middleware");
const Blog = require("../models/blog");
const User = require("../models/user");
const mongoose = require("mongoose");
//get user by id
router.get('/1',(req,res)=>{
    res.send('1');
})
module.exports= router;