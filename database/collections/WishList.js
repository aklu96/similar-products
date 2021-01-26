const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const WishListSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  price: String,
  impacts: [String],
  num_colors: Number,
  variations: [{
    color: String,
    original: String,
    onHover: String,
  }],
  relatedProductIds: [Number],
});

const WishList = mongoose.model('WishList', WishListSchema);

module.exports = WishList;
