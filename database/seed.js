const mongoose = require('mongoose');

// use faker for fake data

// read in schemas
// the specifics of  how this works is a mystery to me...could be a good office hour subject
const Product = require('./Product.js');

// set up database
mongoose.connect('mongodb://localhost/fjords', { useNewUrlParser: true, useUnifiedTopology: true });

// Schema:
// {
//   name: String,
//   price: String,
//   impacts: [String],
//   num_colors: Number,
//   variations: [{
//     color: String,
//     original: String,
//     onHover: String,
//   }],
//   relatedProducts: [String],
// }

// Seeding function that puts my fake data into the database
Product.create({
  name: 'test',
  price: 'easy buckets',
  impacts: ['this', 'that', 'the other'],
  num_colors: 2,
  variations: [{
    color: 'yeugh',
    original: 'https://somelink',
    onHover: 'http://otherlink',
  }, {
    color: 'weeooo',
    original: 'https://somelink',
    onHover: 'http://otherlink',
  }],
})
  .then(() => mongoose.disconnect());
