const mongoose = require('mongoose');
const Product = require('./Product.js');
const products = require('./data.js');

// set up database
mongoose.connect('mongodb://localhost/fjords', { useNewUrlParser: true, useUnifiedTopology: true });

Product.create(products)
  .then(() => mongoose.disconnect())
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
