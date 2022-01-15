const mongoose = require("mongoose");

const Rating = mongoose.model("Rating", {
  productId: {
    type: mongoose.Schema.Types.ObjectId
  },
  customer: {
    type: String,
    maxlength: 100
  },
  rating: {
      type: Number
  },
  content: {
      type: String,
      maxlength: 255
  }
});

module.exports = Rating;
