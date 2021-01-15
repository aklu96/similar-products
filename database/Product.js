const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: String,
  // fill out
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
