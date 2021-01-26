const mongoose = require('mongoose');
const dbConnect = require('./dbConnect.js');
const WishList = require('./collections/WishList.js');

// create and connect to database
dbConnect();

// initialize an empty array for WishList
const wishList = [];

for (let i = 1; i <= 100; i += 1) {
  wishList.push({
    _id: i,
    products: [],
  });
}

WishList.create(wishList)
  .then(() => mongoose.disconnect())
  // eslint-disable-next-line no-console
  .catch((err) => console.log(err));
