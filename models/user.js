const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    googleId:{
        type: 'string',
        required: true
    },
    fullName:{
        type: 'string',
        required: true
    },
    firstName:{
        type: 'string',
        required: true
    },
    lastName:{
        type: 'string',
        required: true
    },
    image:{
        type: 'string'
    },
    createdAt:{
        type:Date,
        default: Date.now()
    }

})
const User = mongoose.model('user',UserSchema);
module.exports = User;