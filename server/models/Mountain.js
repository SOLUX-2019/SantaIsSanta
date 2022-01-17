const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const mountainSchema = mongoose.Schema({
    _id:{
        type: ObjectId
    },
    name:{
        type:String,
        maxlength:5
    },
    address:{
        type:String,
    },
    mid:{
        type: Number
    },
    
    photo:{
    },
    content:{
        type:String,
    },
    review:{
        type:String,
        maxlength:20
    },
    rescue:{
        type:String,
    },
    warining:{
        type:String,
    }
    })

const Mountain = mongoose.model('Mountain', mountainSchema)

module.exports = { Mountain }