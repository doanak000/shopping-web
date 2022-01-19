const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
//import { mongoosePaginate } from 'mongoose-paginate-v2'
const itemSchema = new mongoose.Schema({
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
  },
  item: {
    type: String,
    required: true,
    trim: true,
  },
  imageLink: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  availability: {
    type: String,
    trim: true,
  },
  shipping: {
    type: String,
    trim: true,
  },
  weight: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    trim: true,
  },
  views:{
    type: Number,
    default : 0,
  }
});

itemSchema.plugin( mongoosePaginate );

module.exports = mongoose.model('Item', itemSchema)
