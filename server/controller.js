const Product = require('../database/collections/Product.js');
const WishList = require('../database/collections/WishList.js');

const getSimilarProducts = (req, res) => {
  Product.findById(req.params.productId)
    .then((product) => Product.find().where('_id').in(product.relatedProductIds))
    .then((relatedProducts) => {
      res.send(relatedProducts);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// The database should house a wishlist for each product id separately
// The schema reflects an _id property matching the product, and an array of products
const getWishList = (req, res) => {
  WishList.findById(req.params.productId)
    .then((wishList) => {
      res.status(200).send(wishList);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Therefore, the frontend must send the entire wishlist array and the id
// This allows method for adding and removing to wishlist to be the same on the backen
const updateWishList = (req, res) => {
  const options = {
    new: true,
    upsert: true,
    overwrite: true,
  };

  WishList.findOneAndUpdate({ _id: req.params.productId }, req.body, options)
    .then((wishList) => {
      res.status(201).send(wishList);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = {
  getSimilarProducts,
  getWishList,
  updateWishList,
};
