const { ObjectId } = require('bson');
const mongoose = require('mongoose');
var Counter = require('./Counter');

const postSchema = mongoose.Schema({
    category:{
        type:String,
        required : true
    },
    title:{
        type: String,
        maxLength: 20,
        required : true
    },
    pid:{
        type: Number,
        default:0
    },
    wname:{
        type: String,
        maxLength: 10,
        default:"",
        required : true
    },
    date:{
        type:Date,
        default:Date.now
    },
    content:{
        type: String,
        required : true
    },
    image:{
        type: String
    }
})

postSchema.pre('save', async function (next){
    var post = this;
    if(post.isNew){
        counter = await Counter.findOne({name:'posts'}).exec();
        if(!counter) counter = await Counter.create({name:'posts'});
        counter.count++;
        counter.save();
        post.pid = counter.count;
    }
    return next();
    });

const Post = mongoose.model('Post', postSchema)
module.exports = { Post }
