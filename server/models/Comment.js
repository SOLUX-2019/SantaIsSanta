const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    _id:{
        type: ObjectId
    },
    pid:{
        type: Number
    },
    wname:{
        type: String,
        maxLength: 10
    },
    content:{
        type: String,
        maxLength: 50
    }
})

const Comment = mongoose.model('Comment', commentSchema)

module.exports = { Comment }