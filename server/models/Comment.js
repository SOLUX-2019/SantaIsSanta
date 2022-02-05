const { ObjectId } = require('bson');
const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    pid:{
        type: Number,
        ref:'post',
        required:true
    },
    parentComment:{
        type:mongoose.Schema.Types.ObjectId, 
        ref:'comment'
    }, 
    isDeleted:{
        type:Boolean
    }, 
    isDeleted:{
        type:Boolean
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

commentSchema.virtual('childComments')
  .get(function(){ return this._childComments; })
  .set(function(value){ this._childComments=value; });

// model & export
const Comment = mongoose.model('Comment', commentSchema)

module.exports = { Comment }