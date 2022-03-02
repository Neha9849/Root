const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    googleId:{
        type: String,
        required: true
    },
    fullName:{
        type: String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    image:{
        type: String
    },
    githubLink:{
        type: String,
        default: ""
    },
    linkedinLink:{
        type:String,
        default: ""
    },
    discordId:{
        type:String,
        default: ""
    },
    About:{
        type: String,
        default: ""
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }

})
const User = mongoose.model('user',UserSchema);
module.exports = User;