const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id:{
        type: ObjectId
    },
    password:{
        type:String,
        minlength:6
    },
    id:{
        type:String,
        maxlength:12
    },
    name:{
        type:String,
        maxlength:10
    },
    user_info:{
        type:String,
        maxlength:30
    },
    birth:{
        type:Date
    },
    gender:{
        type:Boolean
    },
    image:{
    },
    token:{
        type: String
    },
    tokenExp:{
        type:Number
    }
    })

const User = mongoose.model('User', userSchema)
module.exports = { User }