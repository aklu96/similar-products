// I used this in place of an index file to improve understanding
// of how the file connects to mongoose. This file exports a function
// that, when invoked, opens a connections to the database

const mongoose = require('mongoose');

const dbConnect = () => {
  mongoose.connect('mongodb://database/fjords', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
};

module.exports = dbConnect;
