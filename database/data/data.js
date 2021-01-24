// This file will create an array of 100 product objects that
// match the schema

// import faker and variations
const faker = require('faker');
const variations = require('./variations.js');

// final array to be exported is products
const products = [];

// seeding data
const genders = ['M\'s', 'W\'s'];
const impacts = ['fair trade', 'organic cotton', 'recycled polyester', 'hemp'];
const productIds = [];
for (let i = 1; i <= 100; i += 1) {
  productIds[i - 1] = i;
}

// function to shuffle arrays that need to be randomized
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    // eslint-disable-next-line no-param-reassign
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

for (let i = 1; i <= 100; i += 1) {
  const product = {};

  // Id is created here so that it can be referenced by related products
  // eslint-disable-next-line no-underscore-dangle
  product._id = i;

  // pick a random gender
  const gender = Math.floor(Math.random() * 2);

  // create a random fake name
  product.name = `${genders[gender]} ${faker.commerce.productAdjective()} ${faker.commerce.productMaterial()} ${faker.commerce.productName()}`;

  // random price between $129 - $299
  product.price = `$${129 + Math.floor(Math.random() * 171)}`;

  // each product will have 1-5 random impacts
  product.impacts = shuffle(impacts).slice(0, Math.floor(Math.random() * 5) + 1);

  // each product will have 1-4 random colors; each color comes with a
  // "variation" that holds urls to its respective image(s)
  product.num_colors = Math.floor(Math.random() * 4) + 1;
  product.variations = shuffle(variations).slice(0, product.num_colors);

  // each product will have 10-15 random related products
  product.relatedProductIds = shuffle(productIds).slice(0, Math.floor(Math.random() * 6) + 10);

  // add the product to the overall data array
  products.push(product);
}

module.exports = products;
