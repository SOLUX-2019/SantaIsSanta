const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const mountainSchema = mongoose.Schema({
    name:{
        type:String,
        maxLength:5
    },
    address:{
        type:String,
    },
    mid:{
        type: Number
    },
    content:{
        type:String,
    },
    review:{
        type:String,
        maxLength:20
    },
    rescue:{
        type:String,
    },
    warning:{
        type:String,
    },
    region:{
        type:String
    }
    })

const Mountain = mongoose.model('Mountain', mountainSchema)

module.exports = { Mountain }