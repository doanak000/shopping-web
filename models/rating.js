const mongoose = require("mongoose");

const Rating = mongoose.model("Rating", {
  productId: {
    type: mongoose.Schema.Types.ObjectId
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
