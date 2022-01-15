const mongoose = require("mongoose");

const Item = mongoose.model("Item", {
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
  }
});

module.exports = Item;
