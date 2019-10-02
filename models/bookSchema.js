'use strict';

const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  shelf: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);
