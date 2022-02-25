const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title:{
        type:'string',
        required:true,
        trim:true
    },
    shortDescription:{
        type:'string',
        required:true,
        trim:true
    },
    body:{
        type:'string',
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})
const Blog = mongoose.model('blogs',BlogSchema);
module.exports =Blog;