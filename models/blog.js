const mongoose = require('mongoose');
const BlogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },
    shortDescription:{
        type:String,
        required:true,
        trim:true
    },
    body:{
        type:String,
        required:true,
    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    tags:{
        type:[String]
    },
    createdAt:{
        type:Date,
        default:Date.now()
    }


})
const Blog = mongoose.model('blogs',BlogSchema);
module.exports =Blog;