/* eslint-disable no-console */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const dbConnect = require('../database/dbConnect.js');
const controller = require('./controller.js');

// server setup
const PORT = 3002;
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.static(`${__dirname}/../public`));

// open connection to database
dbConnect();

// return array of product objects that are similar to the specified product
app.get('/api/products/:productId', controller.getSimilarProducts);

// return the full wish list
app.get('/api/wishlist/:productId', controller.getWishList);

// add or remove a product to/from the wish list
app.post('/api/wishlist/:productId', controller.updateWishList);

app.listen(PORT, () => {
  console.log(`Similar products server running on port ${PORT}...`);
});
