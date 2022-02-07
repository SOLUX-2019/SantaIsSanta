const { ObjectId } = require('bson');
const mongoose = require('mongoose');
var Counter = require('./Counter');

const commentSchema = mongoose.Schema({
    pid:{
        type:Number
       // required:true

    },
    wname:{
        type: String,
        maxLength: 10,
        required:true
    },
    content:{
        type: String,
        maxLength: 50,
        required:true
    },
    cid:{
        type: Number,
        default:0
    },
})

commentSchema.pre('save', async function (next){
    var comment = this;
    if(comment.isNew){
        counter = await Counter.findOne({name:'comments'}).exec();
        if(!counter) counter = await Counter.create({name:'comments'});
        counter.count++;
        counter.save();
        comment.cid = counter.count;
    }
    return next();
    });


// model & export
const Comment = mongoose.model('Comment', commentSchema)

module.exports = { Comment }