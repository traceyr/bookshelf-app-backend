'use strict';
const router = require('express').Router();
const BookSchema = require('../models/bookSchema');

router.get('/mybooks', async (req, res) => {
  const myBooks = await BookSchema.find({});
  try {
    res.send(myBooks);
  } catch(err) {
    console.log(err);
    res.send(err);
  }
});

module.exports = router;
