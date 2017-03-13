'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Product Schema
 */
var ProductSchema = new Schema({
  title: {
    type: String,
    default: '',
    required: 'Please fill Product title',
    trim: true
  },
  upc: {
    type: Number,
    default: '',
    required: 'Please fill Product upc',
    trim: true
  },
  price: {
    type: Number,
    default: '',
    required: 'Please fill Product price',
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  }
});

mongoose.model('Product', ProductSchema);
