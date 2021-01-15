const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://localhost/fjords', { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = db;
