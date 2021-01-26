const mongoose = require('mongoose');
const dbConnect = require('./dbConnect.js');
const Product = require('./collections/Product.js');
const products = require('./data/data.js');

// create and connect to database
dbConnect();

Product.create(products)
  .then(() => mongoose.disconnect())
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
