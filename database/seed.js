const mongoose = require('mongoose');
const dbConnect = require('./dbConnect.js');
const Product = require('./Product.js');
const products = require('./data/data.js');

// set up database
// mongoose.connect('mongodb://localhost/fjords', { useNewUrlParser: true, useUnifiedTopology: true });

// create and connect to database
dbConnect();

Product.create(products)
  .then(() => mongoose.disconnect())
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
