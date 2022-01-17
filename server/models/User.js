const { ObjectId } = require('bson');
const mongoose = require('mongoose');
const  bcrypt = require('bcrypt');
const saltRounds = 10;

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

userSchema.pre('save', function(next){
    var user = this;
    
    if (user.isModified('password')){
        // 비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err)
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password = hash
                next()
            });
        });
    }
})

const User = mongoose.model('User', userSchema)
module.exports = { User }