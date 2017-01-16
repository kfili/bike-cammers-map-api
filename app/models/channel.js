'use strict';

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  url: {
    type: String,
    unique: true,
    required: true,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
    required: true,
  },
  // gps: {
  //   type: String,
  //   required: true,
  // },
}, {
  timestamps: true,
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
