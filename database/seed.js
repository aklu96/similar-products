const mongoose = require('mongoose');

// use faker for fake data

// read in schemas
// the specifics of  how this works is a mystery to me...could be a good office hour subject
const Product = require('./Product.js');

// set up database
mongoose.connect('mongodb://localhost/fjords', { useNewUrlParser: true, useUnifiedTopology: true });

// this will be the seeding function I believe
Product.create({
  name: 'test',
})
  .then(() => mongoose.disconnect());
