const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type:String,
        maxLength:10,
        required : true
    },
    id:{
        type:String,
        maxLength:12,
        required : true
    },
    password:{
        type:String,
        minlength:6,
        required : true
    },
    user_info:{
        type:String,
        maxLength:30,
        required : true
    },
    _id:{
        type: ObjectId
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