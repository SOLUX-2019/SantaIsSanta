const { ObjectId } = require('bson');

const mongoose = require('mongoose');
const { Schema } = mongoose;
const ImageScehma = new Schema({
  img: Buffer,
});

const Image = mongoose.model('image', ImageScehma);
export default Image;