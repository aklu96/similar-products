const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// The id is the same id as the product page
// The products array contains all the products in the wishlist
const WishListSchema = new mongoose.Schema({
  _id: Number,
  products: [{
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
  }],
});

const WishList = mongoose.model('WishList', WishListSchema);

module.exports = WishList;
