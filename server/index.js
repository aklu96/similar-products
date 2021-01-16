/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');
const dbConnect = require('../database/dbConnect.js');
const Product = require('../database/Product.js');

// server setup
const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

// open connection to database
dbConnect();

// return product object associated with that id
app.get('/api/products/:productId', (req, res) => {
  Product.findById(req.params.productId)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
