const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: String,
  price: String,
  impacts: [String],
  num_colors: Number,
  variations: [{
    color: String,
    original: String,
    onHover: String,
  }],
  relatedProducts: [String],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
